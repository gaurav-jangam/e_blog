import React from 'react'
import { FooterPosts } from '../sections/index';


const Footer = () => {
  return (
      <footer class=" text-white bg-white">
        <div class="p-6">
            <FooterPosts />
        </div>

        <div class=" text-lg text-black font-semibold border-b pb-4 text-center p-4 bg-slate-100">
        Copyright © {new Date().getFullYear()}
            <a class="text-xl text-black mb-8 font-semibold border-b pb-4" href="https://gauravjangam.dev/" target="_blank"> Gaurav Jangam</a>
        </div>
    </footer>
  )
}

export default Footer