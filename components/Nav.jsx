import { Rotate as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react' 
import Link from 'next/link'


export default function Nav() {
	const [isOpen, setOpen] = useState(false)
	const [openOverlay, setOpenOverlay] = useState('nav_overlay')
	const [open_click, setOpen_click] = useState('clickout_overlay')

	useEffect(() => {
		if(isOpen) {
			setOpenOverlay('nav_overlay open_nav_overlay')
			setOpen_click('clickout_overlay open_click_out')
		} else {
			setOpenOverlay('nav_overlay')
			setOpen_click('clickout_overlay')
		}

	}, [isOpen])

	const closeNavOverlay = () => {
		setOpenOverlay('nav_overlay')
		setOpen_click('clickout_overlay')
		setOpen(false)
	}

	return (
		<div className="nav">
			<div className="upper_nav">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
			<div onClick={closeNavOverlay} className={open_click}></div>
			<div className={openOverlay}>
				<Link href="/"><div>Home</div></Link>
				<Link href="/acts/chapter2"><div>Activity 2</div></Link>
				<Link href="/acts/chapter3"><div>Activity 3</div></Link>
				<Link href="/acts/chapter4"><div>Activity 4</div></Link>
				<Link href="/acts/chapter5"><div>Activity 5</div></Link>
				<Link href="/acts/chapter6"><div>Activity 6</div></Link>
				<Link href="/acts/chapter7"><div>Activity 7</div></Link>
				<Link href="/acts/chapter8"><div>Activity 8</div></Link>
			</div>
		</div>
	)

}