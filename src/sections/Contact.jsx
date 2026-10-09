import { useState } from 'react';
import { Mail, MapPin, MessageCircle, ArrowUpRight, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { whatsappLink, BUSINESS_EMAIL } from '../data/site';

export default function Contact() {
 const [form,setForm]=useState({name:'',email:'',subject:'',message:''});
 const [error,setError]=useState('');
 const items=[
  {Icon:MessageCircle,title:'WhatsApp',text:'+91 97878 66076',href:whatsappLink("Hi Memorra! I'd like to enquire about your gifts.")},
  {Icon:Mail,title:'Email',text:BUSINESS_EMAIL,href:`mailto:${BUSINESS_EMAIL}`},
  {Icon:MapPin,title:'Delivery',text:'Tamil Nadu & applicable courier locations',href:whatsappLink("Hi Memorra! I'd like to check delivery availability for my location.")}
 ];
 function submit(e){
  e.preventDefault();
  if(!form.name.trim()||!form.email.trim()||!form.message.trim()){setError('Please fill in your name, email and message.');return;}
  const subject=encodeURIComponent(form.subject.trim()||`Website enquiry from ${form.name.trim()}`);
  const body=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
  window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
 }
 return <section id="contact" className="bg-[#fff9f0] px-6 py-24 md:px-10 md:py-36">
  <SectionTitle eyebrow="Let's make something" title="Tell us what you're imagining." text="For orders and custom creations, WhatsApp is the quickest way to reach Memorra. You can also email us below."/>
  <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">{items.map(({Icon,title,text,href})=><a key={title} href={href} target={href.startsWith('https://')?'_blank':undefined} rel={href.startsWith('https://')?'noreferrer':undefined} className="group rounded-[2rem] border border-[#d8cbb7] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"><Icon className="text-[#0b3028]"/><h3 className="mt-8 font-serif text-2xl text-[#173e34]">{title}</h3><p className="mt-2 break-words text-sm leading-6 text-[#77776e]">{text}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#0b3028]">{title==='Email'?'Send an email':'Get in touch'} <ArrowUpRight size={15}/></span></a>)}</div>
  <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-[#d8cbb7] bg-white p-6 shadow-sm md:p-10">
   <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8b6b32]">A little note</p><h3 className="mt-2 font-serif text-3xl text-[#173e34]">Send Memorra an enquiry</h3><p className="mt-2 text-sm leading-6 text-[#77776e]">Submitting opens your email app with the message prepared. Review and send it there.</p>
   <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2">
    <label className="grid gap-2 text-sm font-semibold text-[#173e34]">Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="rounded-xl border border-[#d8cbb7] bg-[#fff9f0] px-4 py-3 font-normal outline-none focus:border-[#0b3028]" placeholder="Name" required/></label>
    <label className="grid gap-2 text-sm font-semibold text-[#173e34]">Your email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="rounded-xl border border-[#d8cbb7] bg-[#fff9f0] px-4 py-3 font-normal outline-none focus:border-[#0b3028]" placeholder="you@example.com" required/></label>
    <label className="grid gap-2 text-sm font-semibold text-[#173e34] sm:col-span-2">Subject (optional)<input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="rounded-xl border border-[#d8cbb7] bg-[#fff9f0] px-4 py-3 font-normal outline-none focus:border-[#0b3028]" placeholder="Custom gift enquiry"/></label>
    <label className="grid gap-2 text-sm font-semibold text-[#173e34] sm:col-span-2">Message<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows="5" className="resize-y rounded-xl border border-[#d8cbb7] bg-[#fff9f0] px-4 py-3 font-normal outline-none focus:border-[#0b3028]" placeholder="Tell us what you have in mind..." required/></label>
    {error&&<p className="text-sm text-red-700 sm:col-span-2">{error}</p>}
    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b3028] px-6 py-3.5 font-bold text-[#fff9f0] transition hover:-translate-y-0.5 hover:bg-[#17483b] sm:col-span-2 sm:justify-self-start"><Send size={16}/> Prepare email <ArrowUpRight size={16}/></button>
   </form>
  </div>
  <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-[#88877f]">Delivery charges apply. Courier availability depends on the product and destination.</p>
 </section>;
}
