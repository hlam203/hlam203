import { motion } from "motion/react";
import { ArrowDown, Calendar, Mail, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const experiences = [
    {
      year: "2024",
      title: "Senior Software Engineer",
      company: "InnovateTech",
      desc: "Dẫn dắt đội ngũ kỹ sư phát triển nền tảng quản lý dữ liệu quy mô lớn. Tối ưu hóa kiến trúc microservices và cải thiện hiệu năng hệ thống lên 40%.",
      skills: ["React", "TypeScript", "Node.js", "System Architecture"]
    },
    {
      year: "2022",
      title: "Fullstack Developer",
      company: "Creative Solutions Group",
      desc: "Xây dựng các sản phẩm số từ những ý tưởng ban đầu đến khi hoàn thành. Tích hợp cổng thanh toán và phát triển ứng dụng di động đa nền tảng.",
      skills: ["React Native", "Next.js", "PostgreSQL", "AWS"]
    },
    {
      year: "2020",
      title: "Frontend Engineer",
      company: "Digital Edge Agency",
      desc: "Làm việc chặt chẽ cùng các nhà thiết kế để tạo ra các giao diện người dùng mượt mà, sống động. Nâng cao khả năng tiếp cận (Accessibility) cho hàng loạt website.",
      skills: ["Vue.js", "Tailwind CSS", "Figma", "Animation"]
    },
    {
      year: "2018",
      title: "Web Developer Intern",
      company: "Tech Start Studio",
      desc: "Bắt đầu hành trình với vai trò thực tập sinh, tham gia bảo trì và sửa lỗi cho các dự án web hiện có. Xây dựng các trang web tĩnh tốc độ cao.",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP"]
    }
  ];

  return (
    <div className="h-screen w-full bg-background text-foreground overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar font-sans relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/bg-video.mp4"
        />
        {/* Fallback overlay to darken the background slightly to ensure text is readable */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Navigation Bar - Empty as requested */}
        <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto z-50 mix-blend-difference pointer-events-none">
        </nav>

        {/* Hero Section - Intro */}
        <section className="min-h-screen w-full snap-start flex flex-col items-center justify-center px-6 pt-20 pb-20 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 gap-8"
          >
            <div className="shrink-0 rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56 border border-white/20 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center w-full">
              <h1 className="font-display font-normal text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2px] text-white">
                Vũ Hoàng Lâm
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-white/70 mt-4 font-light uppercase tracking-[0.2em]">
                Baristar
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/60 mt-8 text-sm p-6 ios-widget w-full">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Ngày sinh</span>
                  <span className="flex items-center gap-2 text-white/80"><Calendar size={14}/> 01/01/2004</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Giới tính</span>
                  <span className="flex items-center gap-2 text-white/80"><User size={14}/> Nam</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Số điện thoại</span>
                  <a href="tel:0968036362" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"><Phone size={14}/> 0968036362</a>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Email</span>
                  <a href="mailto:lamchanhhung@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"><Mail size={14}/> lamchanhhung@gmail.com</a>
                </div>
              </div>

              <p className="max-w-3xl text-base sm:text-lg text-white/70 leading-relaxed mt-8 p-8 ios-widget w-full">
                Gắn bó lâu dài với ngành dịch vụ cà phê – F&B. Mong muốn học hỏi kinh nghiệm quản lý, marketing và xây dựng thương hiệu để trong tương lai có thể mở một quán cà phê mang dấu ấn cá nhân.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: false }}
            className="absolute bottom-10 animate-fade-rise flex flex-col items-center gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] sm:text-xs"
          >
            <span>Cuộn xuống để xem quá trình</span>
            <ArrowDown className="animate-bounce" size={20} />
          </motion.div>
        </section>

        {/* Experience Timeline */}
        {experiences.map((exp, index) => (
          <section key={index} className="min-h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-12 relative py-20">
            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:col-span-5 flex flex-col justify-center items-start md:items-end text-left md:text-right border-l-[1px] md:border-l-0 md:border-r-[1px] border-white/20 pl-6 md:pl-0 md:pr-12 md:py-8 relative"
              >
                {/* Decorative timeline node */}
                <div className="absolute left-[-4.5px] md:left-auto md:right-[-4.5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80 ring-4 ring-black/40"></div>
                
                <span className="font-display font-normal text-6xl sm:text-8xl md:text-9xl text-white drop-shadow-2xl leading-none tracking-[-2px]">
                  {exp.year}
                </span>
                <h3 className="text-lg md:text-xl mt-4 font-light text-white/80 tracking-[0.2em] uppercase">
                  {exp.company}
                </h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:col-span-7 flex flex-col justify-center items-start"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 font-display italic tracking-tight">
                  {exp.title}
                </h2>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl font-light">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full text-xs tracking-widest uppercase text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
              
            </div>
            
            <div className="absolute bottom-10 animate-fade-rise flex flex-col items-center gap-3 text-white/40 uppercase tracking-[0.2em] text-xs">
              <ArrowDown className="animate-bounce" size={20} />
            </div>
          </section>
        ))}
        
        {/* Outro Section */}
        <section className="min-h-screen w-full snap-start flex flex-col items-center justify-center px-6 relative py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-display font-normal text-5xl md:text-7xl text-white leading-[0.95] tracking-[-1px] mb-8">
              Bắt đầu hành trình mới?
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-12 max-w-md font-light">
              Liên hệ với tôi để cùng nhau xây dựng những sản phẩm công nghệ tuyệt đỉnh.
            </p>
          </motion.div>
          <div className="absolute bottom-10 text-white/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans">
            © {new Date().getFullYear()} Vũ Hoàng Lâm. All Rights Reserved.
          </div>
        </section>

      </div>
      
      {/* Hide scrollbar styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
