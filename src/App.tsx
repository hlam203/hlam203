import { motion, useScroll } from "motion/react";
import { ArrowDown, Calendar, Mail, Phone, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const experiences = [
    {
      year: "2022",
      title: "Manager",
      company: "Lamensa Coffee",
      desc: "Quản lý toàn bộ hoạt động vận hành của quán cà phê: từ điều phối nhân sự, kiểm soát chi phí – doanh thu đến duy trì chất lượng dịch vụ và đồ uống. Có kinh nghiệm trong đào tạo nhân viên, lập kế hoạch kinh doanh và xử lý tình huống phát sinh hiệu quả.",
      skills: ["Điều phối nhân sự", "Kiểm soát chi phí", "Đào tạo nghiệp vụ", "Xử lý tình huống"]
    },
    {
      year: "2023",
      title: "Barista",
      company: "The Coffee House",
      desc: "Có trách nhiệm pha chế các loại đồ uống cà phê và trà theo tiêu chuẩn của quán, đảm bảo chất lượng và thẩm mỹ. Đồng thời phục vụ khách hàng, giữ gìn vệ sinh khu vực làm việc và phối hợp với đội nhóm để mang lại trải nghiệm tốt nhất cho khách.",
      skills: ["Pha chế", "Tiêu chuẩn đồ uống", "Làm việc nhóm", "Dịch vụ khách hàng"]
    },
    {
      year: "2024",
      title: "Leader",
      company: "VIETAROMA Coffee",
      desc: "Chịu trách nhiệm điều hành hoạt động của quán trong ca làm việc, giám sát nhân viên, đảm bảo chất lượng phục vụ và vận hành trơn tru. Có khả năng giải quyết tình huống, xử lý khiếu nại khách hàng và đào tạo nhân sự mới hiệu quả.",
      skills: ["Điều hành ca", "Giám sát nhân viên", "Xử lý khiếu nại", "Đào tạo nhân sự"]
    },
    {
      year: "2025",
      title: "Leader",
      company: "Black Clover Coffee",
      desc: "Chịu trách nhiệm điều hành hoạt động của quán trong ca làm việc, giám sát nhân viên, đảm bảo chất lượng phục vụ và vận hành trơn tru. Có khả năng giải quyết tình huống, xử lý khiếu nại khách hàng và đào tạo nhân sự mới hiệu quả.",
      skills: ["Điều hành ca", "Giám sát nhân viên", "Xử lý khiếu nại", "Đào tạo nhân sự"]
    },
    {
      year: "2026",
      title: "Barista",
      company: "Xèng Coffee",
      desc: "Có trách nhiệm pha chế các loại đồ uống cà phê và trà theo tiêu chuẩn của quán, đảm bảo chất lượng và thẩm mỹ. Đồng thời phục vụ khách hàng, giữ gìn vệ sinh khu vực làm việc và phối hợp với đội nhóm để mang lại trải nghiệm tốt nhất cho khách.",
      skills: ["Pha chế", "Tiêu chuẩn đồ uống", "Làm việc nhóm", "Dịch vụ khách hàng"]
    }
  ];

  const skillsList = [
    { category: "Chuyên môn Pha chế", items: ["Pha chế đồ uống (cà phê máy, trà sữa…)", "Latte Art cơ bản"] },
    { category: "Vận hành & Quản lý", items: ["Quản lý ca làm, phân công nhân viên", "Kiểm kê nguyên vật liệu", "Hỗ trợ quản lý vận hành quán"] },
    { category: "Kỹ năng mềm", items: ["Dịch vụ khách hàng", "Xử lý tình huống", "Làm việc nhóm", "Kỹ năng giao tiếp"] }
  ];

  return (
    <div ref={containerRef} className="h-[100dvh] w-full bg-background text-foreground overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar font-sans relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#110A06] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg-coffee-2.mp4"
        />
        {/* Subtle noise overlay and darken to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />
      </div>

      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Navigation Bar - Empty as requested */}
        <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto z-50 mix-blend-difference pointer-events-none">
        </nav>

        {/* Hero Section - Intro */}
        <section className="min-h-[100svh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-20 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-8 w-full"
          >
            <div className="shrink-0 rounded-full overflow-hidden w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 border border-white/20 shadow-2xl">
              <img src="https://static.topcv.vn/avatars/ldEhiI76KiwD7XyuLVPg_697604f264da3_cvtpl.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center w-full">
              <h1 className="font-['Courier_New'] font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight sm:leading-[0.95] tracking-tight sm:tracking-[-2px] text-white">
                Vũ Hoàng Lâm
              </h1>
              <h2 className="text-[11px] sm:text-lg md:text-xl md:text-2xl text-white/70 mt-1 sm:mt-4 font-light uppercase tracking-widest sm:tracking-[0.2em]">
                Baristar
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-white/60 mt-5 sm:mt-8 text-[10px] sm:text-xs md:text-sm p-4 sm:p-6 ios-widget w-full">
                <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-white/30 truncate w-full text-center">Ngày sinh</span>
                  <span className="flex items-center gap-1.5 sm:gap-2 text-white/80"><Calendar size={14} className="scale-75 sm:scale-100 shrink-0"/> 01/01/2004</span>
                </div>
                <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-white/30 truncate w-full text-center">Giới tính</span>
                  <span className="flex items-center gap-1.5 sm:gap-2 text-white/80"><User size={14} className="scale-75 sm:scale-100 shrink-0"/> Nam</span>
                </div>
                <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-white/30 truncate w-full text-center">Số điện thoại</span>
                  <a href="tel:0968036362" className="flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white transition-colors duration-300 whitespace-nowrap"><Phone size={14} className="scale-75 sm:scale-100 shrink-0"/> 0968036362</a>
                </div>
                <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-white/30 truncate w-full text-center">Email</span>
                  <a href="mailto:lamchanhhung@gmail.com" className="flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-full"><Mail size={14} className="scale-75 sm:scale-100 shrink-0"/> lamchanhhung@gmail.com</a>
                </div>
              </div>

              <p className="max-w-3xl text-xs sm:text-sm md:text-lg text-white/70 leading-relaxed mt-4 sm:mt-8 p-4 sm:p-8 ios-widget w-full text-center">
                Gắn bó lâu dài với ngành dịch vụ cà phê – F&B. Mong muốn học hỏi kinh nghiệm quản lý, marketing và xây dựng thương hiệu để trong tương lai có thể mở một quán cà phê mang dấu ấn cá nhân.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: false }}
            className="absolute bottom-6 animate-fade-rise flex flex-col items-center gap-2 sm:gap-3 text-white/40 uppercase tracking-widest sm:tracking-[0.2em] text-[10px] sm:text-xs"
          >
            <span className="hidden sm:inline">Cuộn xuống để xem</span>
            <ArrowDown className="animate-bounce" size={16} />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="min-h-[100svh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 relative py-16 sm:py-24">
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-['Georgia'] italic font-bold text-[29px] text-white mb-8 sm:mb-16 tracking-tight text-center"
            >
              Kỹ năng & Chuyên môn
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 w-full">
              {skillsList.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-col p-5 sm:p-8 ios-widget w-full"
                >
                  <h3 className="text-sm sm:text-lg text-white mb-4 sm:mb-6 uppercase tracking-widest sm:tracking-[0.1em] font-light border-b border-white/10 pb-3 sm:pb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="flex flex-col gap-3 sm:gap-4">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-start sm:items-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-base font-light group cursor-default transition-all duration-300 hover:text-white hover:-translate-y-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0 group-hover:bg-white transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] mt-1.5 sm:mt-0"></div>
                        <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: false }}
            className="absolute bottom-6 animate-fade-rise flex flex-col items-center gap-2 sm:gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] sm:text-xs"
          >
            <ArrowDown className="animate-bounce" size={16} />
          </motion.div>
        </section>

        {/* Experience Timeline */}
        {experiences.map((exp, index) => (
          <section key={index} className="min-h-[100svh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 relative py-16 sm:py-24">
            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-center flex-1">
              
              <motion.div 
                initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:col-span-4 lg:col-span-5 flex flex-col justify-center items-start md:items-end text-left md:text-right border-l-[1px] md:border-l-0 md:border-r-[1px] border-white/20 pl-5 md:pl-0 md:pr-8 lg:pr-12 md:py-8 pt-4 pb-0 relative h-full md:h-auto"
              >
                {/* Decorative timeline node */}
                <div className="absolute left-[-4.5px] md:left-auto md:right-[-4.5px] top-[24px] md:top-1/2 md:-translate-y-1/2 w-2 h-2 rounded-full bg-white/80 ring-4 ring-black/40"></div>
                
                <span className="font-display font-normal text-5xl sm:text-7xl xl:text-9xl text-white drop-shadow-2xl leading-none tracking-tight sm:tracking-[-2px]">
                  {exp.year}
                </span>
                <h3 className="text-xs sm:text-base md:text-lg mt-1.5 md:mt-4 font-light text-white/80 tracking-widest sm:tracking-[0.2em] uppercase transition-all duration-500 hover:text-white hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-default">
                  {exp.company}
                </h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:col-span-8 lg:col-span-7 flex flex-col justify-center items-start border-l-[1px] md:border-l-0 border-white/20 pl-5 md:pl-0 pb-6 md:pb-0 pt-4 md:pt-0 h-full md:h-auto"
              >
                <h2 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl text-white mb-2 sm:mb-6 font-display italic tracking-tight transition-all duration-500 hover:-translate-y-1 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-default">
                  {exp.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg text-white/70 leading-relaxed mb-4 sm:mb-10 max-w-xl font-light text-justify sm:text-left transition-all duration-500 hover:text-white hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] cursor-default">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-white/90 bg-white/5 border border-white/10 hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:text-white transition-all duration-500 backdrop-blur-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
              
            </div>
            
            <div className="absolute bottom-6 animate-fade-rise flex flex-col items-center gap-2 sm:gap-3 text-white/40 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              <ArrowDown className="animate-bounce" size={16} />
            </div>
          </section>
        ))}
        
        {/* Outro Section */}
        <section className="min-h-[100svh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 relative py-16 sm:py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-3xl mx-auto flex flex-col items-center w-full"
          >
            <h2 className="font-display font-normal text-3xl sm:text-5xl md:text-7xl text-white leading-tight sm:leading-[0.95] tracking-tight sm:tracking-[-1px] mb-4 sm:mb-8 text-center">
              Sẵn sàng đồng hành cùng nhau?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 max-w-sm text-center sm:max-w-md font-light leading-relaxed">
              Cảm ơn bạn đã dành thời gian xem hồ sơ của tôi. Với kinh nghiệm quản lý và pha chế, tôi rất mong có cơ hội được làm việc và đóng góp giá trị cho đội ngũ của bạn.
            </p>
          </motion.div>
          <div className="absolute bottom-6 text-white/30 text-[9px] sm:text-xs tracking-widest sm:tracking-[0.2em] uppercase font-sans">
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
