import React, { SyntheticEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { pushDown } from '../animate/variations'

type Props = {}

export const NewAlbum = (props: Props) => {
	const [showUpload, setShowUpload] = useState('')
	const [inputFields, setInputFields] = useState([
		{ name: '', age: '' }
	])

	const handleShow = (value: string) => {
		setShowUpload(value)
	}

	const handleFormChange = (index: number, event: any) => {
		let data: any = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	}

	const addFields = (e: any) => {
		e.preventDefault()
		let newfield = { name: '', age: '' }

		setInputFields([...inputFields, newfield])
	}

	const submit = (e: any) => {
		e.preventDefault();
		console.log(inputFields)
	}


	return (
		<motion.div
			variants={pushDown}
			initial='hidden'
			animate='show'
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20
			}}
			className='bg-mx-100 p-8 rounded-md'>
			<div>
				<h1 className='text-2xl font-semibold flex flex-wrap gap-2 items-center'>
					<i className="ri-folder-add-line text-mx-400 text-opacity-20"></i>
					Add New Photo Collection
				</h1>

				<form className='flex gap-8 items-start p-8'>

					<div className="flex gap-8 w-full flex-wrap">

						{/* SIDE A */}
						<div className="flex flex-col gap-2 bg-mx-200 p-8 border-2 border-mx-400 rounded-md border-opacity-5 hover:border-opacity-10 duration-200 mb-auto">
							<label htmlFor="title">Title</label>
							<input type="text" name='title' className='input' />
							<label htmlFor="description">Description</label>
							<textarea name='description' className='input' />
							<label htmlFor="photographer">Photographer <span className='text-xs italic'>(Optional)</span></label>
							<input type="text" name='photographer' className='input' />
							<label htmlFor="date">Date <span className='text-xs italic'>(Optional)</span></label>
							<input type="date" id='date' name="date" />
							<button className="btn2 text-white mt-8">Submit</button>
						</div>

						{/* SIDE B */}
						<div className="flex-1 gap-8 bg-mx-200 rounded-md p-8 relative border-2 border-mx-400 border-opacity-5 hover:border-opacity-10 duration-200 h-full">
							<div className="flex justify-center items-center w-full h-full">

								{showUpload !== '' &&

									<button className="absolute -right-2 -top-2 bg-mx-300 rounded-md leading-none p-2 z-30 hover:bg-mx-400 duration-200 hover:text-white" onClick={() => setShowUpload('')}>
										<i className="ri-close-fill"></i>
									</button>
								}

								{/* UPLOADING AREA */}

								{showUpload === '' &&
									<div className="flex flex-wrap gap-4">
										<span className='btn cursor-pointer' onClick={() => handleShow('images')}>Upload Images Only</span>
										<span className='btn cursor-pointer' onClick={() => handleShow('albums')}>Create Albums</span>
									</div>
								}

								{showUpload === 'images' && <>
									<label htmlFor="images-files" className='flex flex-col gap-2'>Upload Images<i className="ri-file-upload-line text-4xl p-8 bg-white rounded-full mr-auto cursor-pointer hover:bg-mx-300 duration-200"></i></label>
									<input type="file" id='images-files' name='images-files' className='hidden' />
								</>}


								{showUpload === 'albums' && <div className='flex flex-wrap flex-col gap-2'>
									{inputFields.map((input, index) => {
										return (
											<div key={index} className='flex flex-col gap-2 rounded-md'>
												<h1>Album {index + 1}</h1>
												<input
													name='name'
													placeholder='Name'
													value={input.name}
													onChange={event => handleFormChange(index, event)}
													className='p-2 rounded-md'
												/>
												<input
													name='age'
													placeholder='Age'
													value={input.age}
													onChange={event => handleFormChange(index, event)}
													className='p-2 rounded-md'
												/>

											</div>
										)
									})}
									<button onClick={submit} className='btn'>Submit</button>
									<button onClick={addFields} className='btn'>Add More..</button>
								</div>}

							</div>
						</div>
					</div>

				</form>
			</div>
		</motion.div >
	)
}