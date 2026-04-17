import React , { useRef, useState} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../utils/styles'
import { slideIn } from '../utils/motion'
import EarthCanvas from '../components/EarthCanvas'
import SectionWrapper from '../utils/SectionWrapper'
function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({
    name : "",
    email : "",
    message : "",
  })
  const [loading , setLoading] = useState(false)

  const handleChange = (e)=>{

    const {name , value} = e.target;
    setForm({...form , [name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_nnhi1zf', 'template_okops1p' , {
      from_name: form.name,
      to_name:'Fardeen Khan',
      from_email : form.email,
      to_email : 'fk7483136@gmail.com',
      message : form.message,
    },
    'EdyYdBFnUrLWuxbqF',
  ).then(()=>{
    setLoading(false);
    alert("ThankYou , Your Message Has Been Sent")
    setForm({
      name : "",
      email: "",
      message : "",
    } , (error) => {
      setLoading(false);
      console.log(error);
      alert("Something Went Wrong");
    })
  })

  }
  
  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex  gap-10 overflow-hidden'>

    <motion.div variants={slideIn('left' , 'tween' , 0.2 , 1)} className='flex-[0.75] bg-black-100 p-8  rounded-2xl '>


      <p className={styles.sectionSubText}>Get In Touch </p>
      <h3 className={styles.sectionHeadText} >Contact</h3>
      <form ref={formRef} onSubmit={handleSubmit}  className="mt-12 flex flex-col gap-4 ">
        <label className='flex flex-col ' htmlFor="">
          <span className='text-white font-medium mb-4  '>Your Name </span>
          <input placeholder='Enter Your Name' value={form.name} type="text" name = "name" onChange={handleChange } className='bg-tertiary border-gray-100 border py-4 px-6 placeholder:text:secondary text-white rounded-lg outlined-one border-none font-medium'/>
        </label>

        <label className='flex flex-col ' htmlFor="">
          <span className='text-white font-medium mb-4  '>Your Email </span>
          <input placeholder='Enter Your Email' value={form.email} type="email" name = "email" onChange={handleChange } className='bg-tertiary py-4 px-6 placeholder:text:secondary text-white rounded-lg outlined-one border-none font-medium'/>
        </label>

        <label className='flex flex-col ' htmlFor="">
          <span className='text-white font-medium mb-4  '>Your Message </span>
          <textarea placeholder='What do you Want to Say' value={form.message} rows="7" name="message" type="text"  onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text:secondary text-white rounded-lg outlined-one border-none font-medium'/>
        </label>
        <button className='bg-tertiary py-3 mt-4 w-fit px-8 text-white outline-none font-bold shadow-md shadow-primary rounded-xl' type="submit">

          {loading ? "Sending.." : 'Send' }
        </button>
      </form> 

    </motion.div>

    <motion.div className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px] '  variants={slideIn('right' , 'tween' , 0.2 , 1)}>
<EarthCanvas/>

    </motion.div>
    </div>

    </>
  )
}

export default SectionWrapper(Contact ,"contact")
