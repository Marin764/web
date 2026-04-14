import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">HuTingRong<span className="text-cyan-400">.UE</span></div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">关于我</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">设计工程与 AI</a>
            <a href="#design" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">交互设计实践</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            技术型交互设计师 (Technical UE) - 愿景
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] mb-12">
            <span className="md:block whitespace-nowrap mb-2">联通底层机制与用户直觉</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto] animate-gradient block">
              的数字桥梁
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium mt-16">
            专注 UE 设计与体验架构。借助 AI Agent 与程序化工具链打破设计与开发的协作壁垒。我相信，优秀的交互不仅是界面的流转，更是承载复杂系统、连通代码机制与玩家心流的“数字化底座”。
          </p>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-black hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              查看项目案例
            </a>
          </div>
        </div>
      </section>

      {/* Projects Bento Box */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">工业化管线：工具矩阵与 AI 前瞻探索</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              AI 现阶段无法取代设计的感性审度，但在“交互白盒到资产落地”的管线中具备极大的生产力跃迁潜力。我主导开发了一系列设计自动化工具，旨在消除低效的重复劳动。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Project A: Collaboration Platform */}
            <div className="group relative rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-700">
              <div className="p-12 space-y-8 max-w-4xl">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black shadow-xl shadow-blue-500/10 text-xl">P</div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-blue-300 uppercase tracking-widest">Pipeline Tool</div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">TA 工具向：美术资产自动化协作平台</h3>
                  <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl font-medium">
                    该平台由早期的 PS 图层命名脚本迭代而来，现正发展为落地项目。支持资产批量规范化命名、识图智能搜索及全局规范的动态管理。有效打通了设计层到程序引擎层的数据匹配壁垒。
                  </p>
                </div>
                <div className="flex gap-4">
                  {["快速批量命名", "识图素材搜索", "规范管理"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-12 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[280px]">
                  {[
                    { src: "/images/ps命名脚本.png", alt: "PS 命名脚本" },
                    { src: "/images/快速规范命名工具.png", alt: "快速规范命名工具" },
                    { src: "/images/识图与素材查找.png", alt: "识图与素材查找" }
                  ].map((img, i) => (
                    <div key={i} className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 group-hover:border-blue-500/30 transition-colors aspect-video md:aspect-auto h-[200px] md:h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain p-4 scale-95 group-hover:scale-100 transition-all duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project B: AI Experiments */}
            <div className="group relative rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-700 flex flex-col md:flex-row">
              <div className="flex-1 p-12 space-y-8 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black shadow-xl shadow-purple-500/10 text-xl">AI</div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase">前沿研究：AI 驱动的界面装配与逆向工程</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                    探索大模型在游戏 UE 管线中的实验性落地。整合“组件状态机自动推导”与“底层节点操控”等方案，尝试实现从策划草图到原生设计蓝图的自动化装配。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["LLM 逻辑映射", "AABB 碰撞检测", "自动 UI 装配"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-300 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative min-h-[300px] md:min-h-[400px] bg-black/20 md:border-l border-white/5 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full h-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group-hover:border-purple-500/20 transition-all duration-700">
                  <Image
                    src="/images/ue稿生成阶段性结果.png"
                    alt="生成结果展示"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Output Cases Section - BENTO RESTRUCTURE */}
      <section id="design" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-4">Design Output Cases</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">核心玩法实践：实习期间设计产出</h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              记录在游戏公司实习期间的部分设计案例，涵盖底层资源系统拆解、高频活动交互设计以及复杂系统的交互重构。
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Case A: Resource Flow (Horizontal Box) */}
            <div className="group relative rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden hover:border-cyan-500/30 transition-all duration-700 flex flex-col md:flex-row shadow-lg">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">LOG</div>
                  <span className="text-xs font-black text-zinc-500 tracking-widest uppercase">Systemic Logic</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">资源循环流转分析</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  以《三国杀一将成名》为例，从资源消耗倒推转换方式与生成路径。解析系统内的动态平衡，为数值设计提供逻辑底座。
                </p>
              </div>
              <div className="flex-[1.5] relative min-h-[300px] md:min-h-[400px] border-t md:border-t-0 md:border-l border-white/5 bg-black/40 p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/资源.png"
                    alt="资源循环分析"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </div>

            {/* Case B: Mini-game (Horizontal Box) */}
            <div className="group relative rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden hover:border-purple-500/30 transition-all duration-700 flex flex-col md:flex-row shadow-lg">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black">GIF</div>
                  <span className="text-xs font-black text-zinc-500 tracking-widest uppercase">UX Flow</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase">小游戏活动界面 UE 优化</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  针对功能堆叠导致界面无法承载，通过二级界面分离功能层级。引入作用范围提示与释放位置引导。
                </p>
              </div>
              <div className="flex-[1.5] relative min-h-[300px] md:min-h-[400px] border-t md:border-t-0 md:border-l border-white/5 bg-black/40 p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)] aspect-square md:aspect-[4/3]">
                  <Image
                    src="/images/砸冰块.gif"
                    alt="砸冰块玩法展示"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-1000"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Case C: Equipment System (Horizontal Box) */}
            <div className="group relative rounded-[40px] border border-white/5 bg-white/[0.02] overflow-hidden hover:border-blue-500/30 transition-all duration-700 flex flex-col md:flex-row shadow-lg">
              <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black">EQ</div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase">武库装备体系逻辑重构</h3>
                </div>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  纠正“线性成长 vs 天赋树表现”的错配。优化信息面板结构，统一消耗类弹窗并优化数值对比表现。
                </p>
              </div>
              <div className="flex-[1.5] border-t md:border-t-0 md:border-l border-white/5 bg-black/40 flex flex-col md:flex-row">
                <div className="relative flex-1 min-h-[250px] overflow-hidden group/before border-b md:border-b-0 md:border-r border-white/5">
                  <Image src="/images/装备系统修改前.png" alt="Before" fill className="object-contain p-4 group-hover/before:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest">Before</div>
                </div>
                <div className="relative flex-1 min-h-[250px] overflow-hidden group/after">
                  <Image src="/images/替换.png" alt="After" fill className="object-contain p-4 group-hover/after:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-widest">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Project Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-widest">iOS APP</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-gray-500 uppercase tracking-widest">在校项目实践</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase">全栈落地：在校项目实践</h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                在校期间与小组成员共同开发的创新赛项目。攻坚了可视化地图的交互映射与底层硬件数据的实时协同，完成了从产品 UE 定义到真机运行的闭环。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "交互亮点", value: "可视化地图" },
                  { label: "工程赋能", value: "AI Agent" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                    <div className="text-cyan-400 font-black mb-1">{item.value}</div>
                    <div className="text-zinc-600 text-xs uppercase tracking-widest font-bold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <Image
                  src="/images/iosapp.png"
                  alt="iOS APP 巡检智控系统"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-sm">
        <p>© 2026 HuTingRong. Coded with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
