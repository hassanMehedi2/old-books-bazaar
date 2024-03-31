import { useState } from "react";

import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const PostCard = ({ post,handleDeletePost }) => {

    const { _id, postedBy, image, bookName, category, deadline, minimumPrice, maximumPrice, description } = post;
    const [book_category, setCategory] = useState(category);
    const axios = useAxios();
    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }
    const handleUpdate = e => {
        e.preventDefault();
        console.log(_id);
        const bookName = e.target.bookName.value;
        const category = book_category;
        const deadline = e.target.deadline.value;
        const minimumPrice = e.target.minimumPrice.value;
        const maximumPrice = e.target.maximumPrice.value;
        const description = e.target.description.value;
        const image = e.target.image.value;

        const updatedPost = { image, bookName, category, deadline, minimumPrice, maximumPrice, description };
        console.log(updatedPost);
        axios.patch(`/my_posts/update/${_id}`, updatedPost)
            .then(data => {
                console.log(data.data);
                if (data.data.acknowledged) {
                    handleCloseModal();
                    if (data.data.modifiedCount === 0) {
                        Swal.fire("Nothing to Update!");
                    }
                    else {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Post Updated Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
            .catch(err => console.log(err))
    }
    const handleDelete = () => {
       handleDeletePost()
    }

    const handleCloseModal = () => {
        const modal = document.getElementById('my_modal_3'); // Assuming 'my_modal_3' is the ID of your modal
        if (modal) {
            modal.close(); // Close the dialog using its close() method
        }
    };

    return (
        <div className="grid grid-cols-3 h-[300px] rounded-lg overflow-hidden pr-4  bordered border-4 border-gray-300 ">

            {/* modal starts  */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <form onSubmit={handleUpdate} className="modal-box">
                    <div >
                        <div><h1 className="text-center mb-3 font-bold text-2xl">Update post</h1></div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={postedBy} className="input input-bordered" readOnly />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name="bookName" placeholder="Book Name" className="input input-bordered" defaultValue={bookName} required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" value={book_category} defaultValue={category} id="dropdown" onChange={handleChangeCategory}>
                                <option value="">select..</option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non Fiction</option>
                                <option value="science-fiction">Science Fiction</option>
                                <option value="islamic">Islamic</option>
                            </select>

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" placeholder="deadline" defaultValue={deadline} className="input input-bordered" required />
                        </div>
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text">Image Link :</span>
                            </label>
                            <input type="text" name="image" placeholder="image link" defaultValue={image} className="input input-bordered " required />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="number" name="minimumPrice" defaultValue={minimumPrice} placeholder="Minimum Price " className="input input-bordered" required />

                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="number" name="maximumPrice" defaultValue={maximumPrice} placeholder="Maximum Price " className="input input-bordered" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" defaultValue={description} className="input input-bordered h-16" required />
                    </div>
                    <div className="w-full  flex justify-center">
                        <input className="btn btn-alert text-lg font-semibold mx-auto text-white  bg-green-600 w-1/3 border-none" type="submit" value={'Update'} />
                    </div>
                    <div method="dialog">
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                    </div>

                </form>

            </dialog>
            {/* modal ends */}


            <div className="">
                <img className=" h-full" src={image} alt="product image" />
            </div>
            <div className="col-span-2  ml-5 mt-5">
                <div className="space-y-2">
                    <h2 className="text-xl text-gray-700 font-medium mt-2">Books Name : {bookName}</h2>
                    <p className="text-base ">Deadline : {deadline}</p>
                    <p className="text-base text-justify ">Description : {description?.slice(0, 150)}...</p>

                </div>

                <div className="flex gap-6  mt-7">
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-sm px-3 text-white  bg-green-600 text-base font-medium">Update</button>
                    <button onClick={handleDelete} className="btn btn-sm px-3 bg-red-600 text-white text-base font-medium">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;