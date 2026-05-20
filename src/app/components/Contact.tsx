"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Download,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactData {
  fullname: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactData>({
    fullname: "",
    email: "",
    message: "",
  });

  const formHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you! I'll get back to you soon.",
        });
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        const data = await response.json();
        toast({
          variant: "destructive",
          title: "Sending Failed",
          description: data.error || "Error sending email.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "GeniousBajracharya_CV.pdf";
    link.click();
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-16 flex flex-col lg:flex-row gap-16"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 lg:w-[45%]"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;m currently available for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col gap-6 text-foreground/80 font-medium">
          <a
            href="mailto:bajracharyagenious@gmail.com"
            className="flex items-center gap-4 hover:text-primary transition-colors p-4 rounded-xl hover:bg-muted/30 border border-transparent hover:border-border/50"
          >
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-lg">bajracharyagenious@gmail.com</span>
          </a>
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 border border-transparent hover:border-border/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-lg">+977 9861532823</span>
          </div>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/genious-bajracharya-573964211/" },
            { icon: Github, href: "https://github.com/Genious-Bajracharya" },
            { icon: Instagram, href: "https://www.instagram.com/_genious.__/" },
            { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100009409115809" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="mt-4">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 gap-2 group"
            onClick={handleDownloadCv}
          >
            Download CV
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-[55%] bg-card border border-border p-8 rounded-3xl shadow-lg"
      >
        <form onSubmit={formHandle} className="flex flex-col gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground/80 pl-1">
              Full Name
            </label>
            <Input
              type="text"
              name="fullname"
              placeholder="John Doe"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="h-14 rounded-2xl bg-muted/30 focus-visible:ring-primary border-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground/80 pl-1">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-14 rounded-2xl bg-muted/30 focus-visible:ring-primary border-none"
            />
          </div>
          <div className="space-y-1 flex-1">
            <label className="text-sm font-medium text-foreground/80 pl-1">
              Message
            </label>
            <Textarea
              name="message"
              rows={6}
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none rounded-2xl bg-muted/30 focus-visible:ring-primary border-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full rounded-2xl h-14 mt-2 text-lg font-medium group"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
