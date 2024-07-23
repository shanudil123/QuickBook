import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Perks from "../perks";


export default function PlacesPage() {

    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setphotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }



    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }



    return (
        <div>


            {action !== 'new' && (

                <div className="text-center">

                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                        Add new  place

                    </Link>

                </div>



            )}

            {action === 'new' && (

                <div>
                    <form>

                        {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: my lovely apartment" />


                        {preInput('Address', 'Address to this place')}
                        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" />



                        {preInput('Photos', 'more = better')}
                        <div className="flex gap-2">
                            <input value={photoLink} onChange={ev => setAddress(ev.target.value)}
                                type="text" placeholder={'Add using a link...jpg'} />
                            <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
                        </div>
                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                            <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>
                                upload
                            </button>

                        </div>

                        {preInput('Description', 'description of the place')}

                        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />



                        {preInput('perks', 'select all the perks  of your place')}

                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                            <Perks selected={perks} onChange={setPerks} />



                        </div>



                        <h2 className="text-2xl mt-4">Extra Info</h2>
                        <p className="text-gray-500 text-sm">House rules,etc </p>
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />



                        <h2 className="text-2xl mt-4">Check in&out times</h2>
                        <p className="text-gray-500 text-sm">add check in and out times, remember to have some time window for cleaning the room between guests </p>



                        <div className="grid gap-2 sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 -mb-1">Check in time</h3>
                                <input type="text" placeholder="8:00"
                                    value={checkIn}
                                    onChange={ev => setCheckIn(ev.target.value)} />
                            </div>


                            <div>
                                <h3 className="mt-2 -mb-1">Check out time</h3>
                                <input type="text" placeholder="17:00"
                                    value={checkOut}
                                    onChange={ev => setCheckOut(ev.target.value)}

                                />
                            </div>

                            <div>
                                <h3 className="mt-2 -mb-1">Max no of Guests</h3>
                                <input type="number" value={maxGuests}
                                    onChange={ev => setMaxGuests(ev.target.value)}

                                />
                            </div>

                        </div>


                        <div>

                            <button className="primary my-4">
                                Save

                            </button>


                        </div>




                    </form>
                </div >
            )
            }
        </div >
    )
}


//h2,p venuwta {preinput dana eka lesiyi}