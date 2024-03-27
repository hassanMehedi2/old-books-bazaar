import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";


const SellBooks = () => {
    const { user } = useAuth();
    const [book_category, setCategory] = useState();

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleAddPost = e => {
        e.preventDefault();

        const postedBy = user?.email;
        const bookName = e.target.bookName.value;
        const category = book_category;
        const deadline = e.target.deadline.value;
        const minimumPrice = e.target.minimumPrice.value;
        const maximumPrice = e.target.maximumPrice.value;
        const description = e.target.description.value;
        const image = e.target.image.value;

        const post = { postedBy,image, bookName, category, deadline, minimumPrice, maximumPrice, description };

        axios.post('http://localhost:5000/api/v1/sell-posts', post)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast.success('Posted Successfully')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="pt-10 bg-base-200">
            <form onSubmit={handleAddPost} className="  p-5 ">
                <div >
                    <div><h1 className="text-center mb-3 font-bold text-2xl">Add a sell post</h1></div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" readOnly />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" name="bookName" placeholder="Book Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="h-12 rounded-lg p-3" value={book_category} id="dropdown" onChange={handleChangeCategory}>
                            <option value="">select..</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non Fiction</option>
                            <option value="science-fiction">Science Fiction</option>
                            <option value="islamic">Islamic</option>
                        </select>

                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" placeholder="deadline" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" name="minimumPrice" placeholder="Minimum Price " className="input input-bordered" required />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" name="maximumPrice" placeholder="Maximum Price " className="input input-bordered" required />

                    </div>
                </div>
                <div>
                    <div className="flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered h-24" required />
                        </div>
                        <div className="form-control  w-1/3">
                            <label className="label">
                                <span className="label-text">Image Link :</span>
                            </label>
                            <input type="text" name="image" placeholder="image link" className="input input-bordered " required />
                        </div>
                    </div>
                    
                </div>
                <div>
                    <input className="btn btn-alert text-lg font-semibold text-white bg-gray-500 w-full my-10" type="submit" value={'Post'} />
                </div>
            </form>
        </div>
    );
};

export default SellBooks;