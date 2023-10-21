import React from 'react'

const Footer = () => {
    return (
        <div className='w-full border border-t-grey-500 flex justify-around bg-green-400 mt-5'>
            <div className="flex justify-around w-full py-5">
                <div className="grid gap-3">
                    <h3 className='font-bold text-blue text-xl '>Created By</h3>
                    <ul>
                        <h4>Prasoon Asati</h4>
                        <h5><a href="tel:9424415952"  className='hover:text-white'>+919424415952</a><br /><a  className='hover:text-white' href="tel:7610490206">+917610490206</a></h5>
                        <a href="mailto:prasouna@gmail.com"  className='hover:text-white'>Email Me !</a>
                    </ul>

                </div>
                <div className="grid gap-3">
                    <h3  className='font-bold text-blue text-xl '>Lets Connect</h3>
                    <ul>
                        <li className='hover:text-white'><a href="https://www.linkedin.com/in/prasoon-asati-01a843196/">Linkdin</a></li>
                        <li className='hover:text-white'><a href="https://github.com/prasoon-88/">Github</a></li>
                        <li className='hover:text-white'><a href="https://api.whatsapp.com/send?phone=919424415952&text=%F0%9F%98%83%20Hi!%20%0AThis%20is">Whatsapp</a></li>
                        <li className='hover:text-white'><a href="mailto:prasouna@gmail.com">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer