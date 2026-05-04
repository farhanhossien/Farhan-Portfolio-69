import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  Phone, 
  LogOut, 
  Check, 
  Save, 
  Plus, 
  Trash2, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getStorageData, DEFAULT_DATA } from '../lib/data';

// --- Components ---

const Toast = ({ message, type }: { message: string, type: 'success' | 'warn' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className={`fixed bottom-24 right-4 sm:bottom-10 sm:right-10 px-6 py-3 rounded-xl shadow-2xl z-[100] border font-medium ${
      type === 'success' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
    }`}
  >
    {message}
  </motion.div>
);

const AdminInput = ({ label, value, onChange, type = "text", textarea = false }: any) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#D7E2EA] opacity-60 text-xs uppercase tracking-widest font-medium">{label}</label>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA] rounded-xl p-3 focus:border-[#B600A8]/60 outline-none transition-colors min-h-[120px] w-full"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA] rounded-xl p-3 focus:border-[#B600A8]/60 outline-none transition-colors w-full"
      />
    )}
  </div>
);

const AdminButton = ({ children, onClick, variant = "primary", className = "" }: any) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm transition-all ${
      variant === "primary" 
        ? "text-white shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset] outline-[#D7E2EA] outline-[2px] -outline-offset-[3px]" 
        : variant === "danger"
        ? "border border-red-500/40 text-red-500 hover:bg-red-500/10"
        : "border border-[#D7E2EA]/20 text-[#D7E2EA] hover:bg-[#D7E2EA]/5"
    } ${className}`}
    style={variant === "primary" ? { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' } : {}}
  >
    {children}
  </motion.button>
);

// --- Auth Gate ---

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "farhan2024") {
      localStorage.setItem("admin_auth", "true");
      onLogin();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 sm:p-12 rounded-3xl w-full max-w-md shadow-2xl"
      >
        <h1 className="hero-heading text-3xl font-black uppercase text-center mb-8">Admin Panel</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <AdminInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <AdminButton type="submit">Login</AdminButton>
        </form>
      </motion.div>
    </div>
  );
};

// --- Dashboard Pages ---

const DashboardHome = ({ data }: { data: any }) => (
  <div className="flex flex-col gap-10">
    <div>
      <h2 className="hero-heading text-4xl font-black uppercase">Welcome back, Farhan</h2>
      <p className="text-[#D7E2EA] opacity-40 uppercase tracking-widest text-xs mt-2">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-2">
        <span className="text-5xl font-black text-[#B600A8]">{data.services.length}</span>
        <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm">Services Active</span>
      </div>
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-2">
        <span className="text-5xl font-black text-[#7621B0]">{data.projects.length}</span>
        <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm">Projects Listed</span>
      </div>
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-2">
        <span className="text-xl font-bold text-[#D7E2EA]">Live Portfolio</span>
        <Link to="/" target="_blank" className="text-[#B600A8] uppercase tracking-widest text-xs hover:underline">View Website</Link>
      </div>
    </div>
  </div>
);

const HeroEditor = ({ data, onSave, hasChanges }: any) => {
  const [hero, setHero] = useState(data.hero);

  useEffect(() => {
    if (JSON.stringify(hero) !== JSON.stringify(data.hero)) {
      onSave(null, true); // Update change indicator only
    }
  }, [hero]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="hero-heading text-4xl font-black uppercase">Hero Section</h2>
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-8">
        <AdminInput label="Name" value={hero.name} onChange={(v: string) => setHero({...hero, name: v})} />
        <AdminInput label="Tagline" textarea value={hero.tagline} onChange={(v: string) => setHero({...hero, tagline: v})} />
        <div className="flex flex-col gap-4">
           <label className="text-[#D7E2EA] opacity-60 text-xs uppercase tracking-widest font-medium">Nav Links (Max 6)</label>
           <div className="grid grid-cols-2 gap-4">
             {hero.navLinks.map((link: string, i: number) => (
               <div key={i} className="flex gap-2">
                 <AdminInput value={link} onChange={(v: string) => {
                   const newLinks = [...hero.navLinks];
                   newLinks[i] = v;
                   setHero({...hero, navLinks: newLinks});
                 }} />
                 <button onClick={() => {
                   const newLinks = hero.navLinks.filter((_: any, idx: number) => idx !== i);
                   setHero({...hero, navLinks: newLinks});
                 }} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"><Trash2 size={16}/></button>
               </div>
             ))}
             {hero.navLinks.length < 6 && (
               <button onClick={() => setHero({...hero, navLinks: [...hero.navLinks, "New Link"]})} className="p-3 border border-dashed border-[#D7E2EA]/20 rounded-xl text-[#D7E2EA]/40 hover:text-[#D7E2EA]/60 flex items-center justify-center gap-2"><Plus size={16}/> Add Link</button>
             )}
           </div>
        </div>
        <AdminButton onClick={() => onSave('portfolio_hero', hero)}>Save Changes</AdminButton>
      </div>
    </div>
  );
};

const AboutEditor = ({ data, onSave }: any) => {
  const [about, setAbout] = useState(data.about);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="hero-heading text-4xl font-black uppercase">About Section</h2>
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-6">
        <div className="relative">
          <AdminInput label="About Paragraph" textarea value={about.paragraph} onChange={(v: string) => setAbout({...about, paragraph: v})} />
          <span className="absolute bottom-4 right-4 text-[10px] text-[#D7E2EA] opacity-30">{about.paragraph.length} CHARACTERS</span>
        </div>
        <AdminButton onClick={() => onSave('portfolio_about', about)}>Save Changes</AdminButton>
      </div>
    </div>
  );
};

const ServicesEditor = ({ data, onSave }: any) => {
  const [services, setServices] = useState(data.services);
  const [showAdd, setShowAdd] = useState(false);
  const [newService, setNewService] = useState({ name: "", description: "" });

  const move = (index: number, dir: number) => {
    const newArr = [...services];
    const target = index + dir;
    if (target < 0 || target >= newArr.length) return;
    [newArr[index], newArr[target]] = [newArr[target], newArr[index]];
    // Update numbers
    newArr.forEach((s, idx) => s.number = (idx + 1).toString().padStart(2, '0'));
    setServices(newArr);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="hero-heading text-4xl font-black uppercase">Services</h2>
        <AdminButton onClick={() => setShowAdd(true)} variant="outline" className="flex items-center gap-2"><Plus size={16}/> Add New</AdminButton>
      </div>

      {showAdd && (
        <div className="bg-[#1A1A1A] border-2 border-[#B600A8] p-8 rounded-2xl flex flex-col gap-6 mb-4">
          <h3 className="text-white font-bold">New Service</h3>
          <AdminInput label="Service Name" value={newService.name} onChange={(v: string) => setNewService({...newService, name: v})} />
          <AdminInput label="Description" textarea value={newService.description} onChange={(v: string) => setNewService({...newService, description: v})} />
          <div className="flex gap-4">
            <AdminButton onClick={() => {
              const res = [...services, { ...newService, number: (services.length + 1).toString().padStart(2, '0') }];
              setServices(res);
              setShowAdd(false);
              setNewService({ name: "", description: "" });
            }}>Confirm Add</AdminButton>
            <AdminButton onClick={() => setShowAdd(false)} variant="outline">Cancel</AdminButton>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {services.map((service: any, index: number) => (
          <div key={index} className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-6">
            <div className="text-3xl font-black opacity-20">{service.number}</div>
            <div className="flex-grow flex flex-col gap-4">
              <AdminInput value={service.name} onChange={(v: string) => {
                const res = [...services];
                res[index].name = v;
                setServices(res);
              }} />
              <AdminInput textarea value={service.description} onChange={(v: string) => {
                const res = [...services];
                res[index].description = v;
                setServices(res);
              }} />
            </div>
            <div className="flex sm:flex-col gap-2 justify-center">
              <button onClick={() => move(index, -1)} className="p-2 border border-[#D7E2EA]/10 rounded-lg hover:bg-white/5"><ChevronUp size={20}/></button>
              <button onClick={() => move(index, 1)} className="p-2 border border-[#D7E2EA]/10 rounded-lg hover:bg-white/5"><ChevronDown size={20}/></button>
              <button onClick={() => {
                if(window.confirm("Are you sure?")) {
                   const res = services.filter((_: any, i: number) => i !== index);
                   res.forEach((s: any, idx: number) => s.number = (idx + 1).toString().padStart(2, '0'));
                   setServices(res);
                }
              }} className="p-2 border border-red-500/20 text-red-500 rounded-lg hover:bg-red-500/10"><Trash2 size={20}/></button>
            </div>
          </div>
        ))}
      </div>

      <AdminButton onClick={() => onSave('portfolio_services', services)}>Save Services Order & Content</AdminButton>
    </div>
  );
};

const ProjectsEditor = ({ data, onSave }: any) => {
  const [projects, setProjects] = useState(data.projects);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="hero-heading text-4xl font-black uppercase">Projects</h2>
        <AdminButton onClick={() => setShowAdd(true)} variant="outline" className="flex items-center gap-2"><Plus size={16}/> Add New</AdminButton>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project: any, index: number) => (
          <div key={index} className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-8">
            <div className="flex justify-between items-start">
               <span className="text-4xl font-black opacity-10">{project.number}</span>
               <button onClick={() => {
                if(window.confirm("Delete project?")) {
                   const res = projects.filter((_: any, i: number) => i !== index);
                   res.forEach((p: any, idx: number) => p.number = (idx + 1).toString().padStart(2, '0'));
                   setProjects(res);
                }
              }} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"><Trash2 size={20}/></button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdminInput label="Project Name" value={project.name} onChange={(v: string) => {
                const res = [...projects];
                res[index].name = v;
                setProjects(res);
              }} />
              <div className="flex flex-col gap-2">
                <label className="text-[#D7E2EA] opacity-60 text-xs uppercase tracking-widest font-medium">Category</label>
                <select 
                  value={project.category} 
                  onChange={(e) => {
                    const res = [...projects];
                    res[index].category = e.target.value;
                    setProjects(res);
                  }}
                  className="bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA] rounded-xl p-3 outline-none"
                >
                  <option value="Client">Client</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#D7E2EA]/5 pt-6">
              <label className="text-[#D7E2EA] opacity-60 text-xs uppercase tracking-widest font-medium">Image URLs</label>
              <AdminInput label="Col 1 - Top Image" value={project.images.col1_1} onChange={(v: string) => {
                const res = [...projects];
                res[index].images.col1_1 = v;
                setProjects(res);
              }} />
              <AdminInput label="Col 1 - Bottom Image" value={project.images.col1_2} onChange={(v: string) => {
                const res = [...projects];
                res[index].images.col1_2 = v;
                setProjects(res);
              }} />
              <AdminInput label="Main Large Image" value={project.images.col2} onChange={(v: string) => {
                const res = [...projects];
                res[index].images.col2 = v;
                setProjects(res);
              }} />
            </div>
          </div>
        ))}
      </div>

      <AdminButton onClick={() => onSave('portfolio_projects', projects)}>Save Projects</AdminButton>
    </div>
  );
};

const ContactEditor = ({ data, onSave }: any) => {
  const [contact, setContact] = useState(data.contact);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="hero-heading text-4xl font-black uppercase">Contact Info</h2>
      <div className="bg-[#1A1A1A] border border-[#D7E2EA]/10 p-8 rounded-2xl flex flex-col gap-8">
        <AdminInput label="WhatsApp Number" value={contact.whatsapp} onChange={(v: string) => setContact({...contact, whatsapp: v})} />
        <AdminInput label="Email Address" value={contact.email} onChange={(v: string) => setContact({...contact, email: v})} />
        <AdminInput label="Future Goal Text" textarea value={contact.futureGoal} onChange={(v: string) => setContact({...contact, futureGoal: v})} />
        <AdminButton onClick={() => onSave('portfolio_contact', contact)}>Save Changes</AdminButton>
      </div>
    </div>
  );
};

// --- Main Layout ---

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("admin_auth") === "true");
  const [portfolioData, setPortfolioData] = useState(getStorageData());
  const [toast, setToast] = useState<{message: string, type: 'success' | 'warn'} | null>(null);
  const [isChanged, setIsChanged] = useState<string[]>([]);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleSave = (key: string | null, justIndicator = false) => {
    if (justIndicator) {
      const path = location.pathname.split('/').pop() || 'dashboard';
      if (!isChanged.includes(path)) setIsChanged([...isChanged, path]);
      return;
    }

    if (key && portfolioData) {
      const val = (portfolioData as any)[key.replace('portfolio_', '')]; // This is tricky since state is local to editors
      // In a real app, state should be central. For this request, I'll pass value from children.
    }
  };

  const centralSave = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setPortfolioData(getStorageData());
    setToast({ message: "Saved successfully!", type: 'success' });
    
    const path = location.pathname.split('/').pop() || 'dashboard';
    setIsChanged(isChanged.filter(p => p !== path));
  };

  const navItems = [
    { name: 'Dashboard', path: '', icon: LayoutDashboard },
    { name: 'Hero', path: 'hero', icon: Home },
    { name: 'About', path: 'about', icon: User },
    { name: 'Services', path: 'services', icon: Briefcase },
    { name: 'Projects', path: 'projects', icon: FolderOpen },
    { name: 'Contact', path: 'contact', icon: Phone },
  ];

  if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen bg-[#0C0C0C] flex flex-col md:flex-row text-[#D7E2EA] font-sans">
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </AnimatePresence>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-[240px] border-r border-[#D7E2EA]/10 p-6 fixed h-full bg-[#0C0C0C]">
        <div className="hero-heading text-2xl font-black uppercase mb-10">FH Admin</div>
        <nav className="flex flex-col gap-2 flex-grow">
          {navItems.map((item) => {
            const isActive = location.pathname === `/admin/${item.path}` || (location.pathname === '/admin' && item.path === '');
            const hasChange = isChanged.includes(item.path || 'dashboard');
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${
                  isActive ? "bg-white/5 text-white" : "opacity-40 hover:opacity-100"
                }`}
              >
                {isActive && <motion.div layoutId="activeNav" className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', opacity: 0.2 }} />}
                <item.icon size={18} />
                <span className="text-sm font-medium uppercase tracking-widest">{item.name}</span>
                {hasChange && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />}
              </Link>
            );
          })}
        </nav>
        <button 
          onClick={() => { localStorage.removeItem("admin_auth"); setIsAuthenticated(false); }}
          className="flex items-center gap-4 px-4 py-3 opacity-40 hover:opacity-100 text-red-400 mt-auto"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium uppercase tracking-widest">Logout</span>
        </button>
      </aside>

      {/* Mobile Nav Top */}
      <div className="md:hidden flex justify-between items-center p-6 border-b border-[#D7E2EA]/10 sticky top-0 bg-[#0C0C0C]/80 backdrop-blur-xl z-50">
        <div className="hero-heading text-xl font-black uppercase">FH Admin</div>
        <button onClick={() => { localStorage.removeItem("admin_auth"); setIsAuthenticated(false); }} className="text-red-400"><LogOut size={20}/></button>
      </div>

      {/* Content Area */}
      <main className="flex-grow md:ml-[240px] p-6 sm:p-10 md:p-14 pb-32 md:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Routes>
              <Route path="/" element={<DashboardHome data={portfolioData} />} />
              <Route path="/hero" element={<HeroEditor data={portfolioData} onSave={centralSave} />} />
              <Route path="/about" element={<AboutEditor data={portfolioData} onSave={centralSave} />} />
              <Route path="/services" element={<ServicesEditor data={portfolioData} onSave={centralSave} />} />
              <Route path="/projects" element={<ProjectsEditor data={portfolioData} onSave={centralSave} />} />
              <Route path="/contact" element={<ContactEditor data={portfolioData} onSave={centralSave} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Nav Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0C0C0C]/90 backdrop-blur-2xl border-t border-[#D7E2EA]/10 flex items-center justify-around px-4 z-50">
        {navItems.map((item) => {
          const isActive = location.pathname === `/admin/${item.path}` || (location.pathname === '/admin' && item.path === '');
          const hasChange = isChanged.includes(item.path || 'dashboard');
          return (
            <Link key={item.path} to={item.path} className={`p-3 rounded-full transition-all relative ${isActive ? "text-[#B600A8]" : "opacity-40"}`}>
               <item.icon size={22} />
               {hasChange && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-500" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
