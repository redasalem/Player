import gamesImg from "@/gamesImagesData/Data";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs,doc, setDoc } from 'firebase/firestore';
import app from "@/config/firebase";
import Link from "next/link";
 import { ToastContainer, toast } from 'react-toastify';



export default function Form() {
    const notify = () => toast("post was successfully created");
  const { data: session } = useSession();
  //options for Games

  const [Games, setGames] = useState([]);

   const db = getFirestore(app);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    game: "",
    image:''
  });

  useEffect(() => {
    setGames(gamesImg);
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
  
await setDoc(doc(db, "posts",Date.now().toString()),formData);


 setFormData({
     title: "",
    description: "",
    date: "",
    location: "",
    game: "",
    image:''
  })

}
    


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({ ...values, userName: session.user.name }));
    setFormData((values) => ({ ...values, userImage: session.user.image }));
    setFormData((values) => ({ ...values, email: session.user.email }));

    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
    {formData.title.length > 4 || formData.image.length > 10 ?<ToastContainer />:''}  
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create Post
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill in the details below
          </p>
        </div>

        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Enter event description"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* Location Field */}
        <div>
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            required
          />
        </div>

        {/* Game Select */}
        <div>
          <label
            htmlFor="game"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Choose a Game
          </label>
          <select
            id="game"
            name="game"
            value={formData.game}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none cursor-pointer"
            required
          >
            <option value="">Choose a Game</option>
            {Games.map((item,index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            Link URL Image Post :
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter URL Image Post"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            required
          />
          <p className="text-green-800 font-semibold mt-3"><span className="text-red-600 font-bold">Note:</span>To upload an image, enter a Google image URL or upload the image to 
              <Link target="_blank" className="text-blue-600 mx-1" href='https://postimages.org/'>postimages.org</Link>
               and paste the URL (Direct link).</p>
        </div>

        {/* Submit Button */}
        <button
        onClick={notify}
          type="submit"
          className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800"
        >
          Submit
        </button>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          All fields are required to create an Post
        </p>
      </form>
    </div>
  );
}
