import React, { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Animation from '../common/Animation';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.from_name || !formData.reply_to || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }

    const templateParams = {
      ...formData,
      to_name: 'Avijit Biswas',
      time: getCurrentTime()
    };

    emailjs.send('service_xu92qam', 'template_4sfr45m', templateParams, 'oiry8QRDkNChgqeHQ')
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          toast.error('Failed to send message. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-main-background">

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#ef6957] rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Let's Connect
            </h1>
            <div className="w-12 h-0.5 bg-[#ef6957] rounded-full"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <Animation animation="Down-up" className="transition-transform duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">

              <div className="lg:col-span-2 space-y-6">

                <div className="bg-carosel-background backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#ef6957]" />
                    Get In Touch
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer">
                      <div className="w-10 h-10 bg-[#ef6957]/20 rounded-lg flex items-center justify-center group-hover:bg-[#ef6957]/30 transition-all duration-300">
                        <Mail className="w-4 h-4 text-[#ef6957]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-sm text-white font-medium">avijit@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                        <Phone className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="text-sm text-white font-medium">+91 74390 96094</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                        <MapPin className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="text-sm text-white font-medium">Barrackpore, West Bengal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-carosel-background backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group hover:scale-110">
                      <Github className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group hover:scale-110">
                      <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="w-12 h-12 bg-sky-500/20 hover:bg-sky-500/30 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group hover:scale-110">
                      <Twitter className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="w-12 h-12 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group hover:scale-110">
                      <Mail className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Available for projects</span>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-carosel-background backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-[#ef6957]" />
                    Send Message
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:border-[#ef6957] focus:ring-1 focus:ring-[#ef6957]/50 transition-all duration-300"
                            placeholder="Your name"
                          />
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#ef6957] transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="reply_to"
                            value={formData.reply_to}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:border-[#ef6957] focus:ring-1 focus:ring-[#ef6957]/50 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#ef6957] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ef6957] focus:ring-1 focus:ring-[#ef6957]/50 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ef6957] focus:ring-1 focus:ring-[#ef6957]/50 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className={`w-full bg-gradient-to-r from-[#ef6957] to-red-600 hover:from-red-600 hover:to-[#ef6957] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#ef6957]/25 transform hover:scale-[1.02] active:scale-[0.98] ${loading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
}

export default Contact;