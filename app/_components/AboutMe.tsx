import Image from 'next/image'
import macbookIphone from '@/public/timeline.png';
export default function AboutMe(){
    return (
        <section >
            <h1>About me</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat eius reiciendis officia. Pariatur sunt cumque adipisci quibusdam optio sit vero nemo, magni possimus, corrupti omnis quam iure corporis commodi.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci architecto, aspernatur assumenda consequuntur ipsam, id inventore, accusantium consequatur quibusdam cum iste officia repudiandae. Doloremque, ullam voluptatum magni nam dolores eligendi.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus fugit nihil id neque aut esse illo ratione dolore quos, alias placeat ducimus quam, ab recusandae fugiat? Vitae cupiditate fugit illum.
            </p>
            <div className="columns-2 md:columns-4 gap-4 space-y-4">
                <img className="w-full rounded-xl shadow" src="./masonry-01.jpg" width="232" height="290" alt="Image 01" />
                <img className="w-full rounded-xl shadow" src="./masonry-02.jpg" width="232" height="290" alt="Image 02" />
                <img className="w-full rounded-xl shadow" src="./masonry-03.jpg" width="232" height="174" alt="Image 03" />
                <img className="w-full rounded-xl shadow" src="./masonry-04.jpg" width="232" height="155" alt="Image 04" />
                <img className="w-full rounded-xl shadow" src="./masonry-05.jpg" width="232" height="349" alt="Image 05" />
                <img className="w-full rounded-xl shadow" src="./masonry-06.jpg" width="232" height="250" alt="Image 06" />
                <img className="w-full rounded-xl shadow" src="./masonry-07.jpg" width="232" height="349" alt="Image 07" />
                <img className="w-full rounded-xl shadow" src="./masonry-08.jpg" width="232" height="155" alt="Image 08" />
                <img className="w-full rounded-xl shadow" src="./masonry-09.jpg" width="232" height="250" alt="Image 09" />
                <img className="w-full rounded-xl shadow" src="./masonry-10.jpg" width="232" height="290" alt="Image 10" />
                <img className="w-full rounded-xl shadow" src="./masonry-11.jpg" width="232" height="155" alt="Image 11" />
                <img className="w-full rounded-xl shadow" src="./masonry-12.jpg" width="232" height="309" alt="Image 12" />                  
            </div>
            <div>
                timeline
                <Image width={1000} src={macbookIphone} alt='teste' />
            </div>
        </section>
    )
}