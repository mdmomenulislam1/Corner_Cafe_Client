

const ServiceFeature = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-4 my-8 mb-20">
            <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12">
                <div className=" gap-2 md:gap-5 lg:gap-8 flex justify-between items-center shadow-2xl rounded-2xl">
                    <div className="h-full w-full">
                        <img className=" w-full h-full rounded-2xl" src="https://i.ibb.co/3v3ncbm/Concierge-Services-3.jpg" alt="Personalized Concierge Assistance"/>
                    </div>
                    <div className="py-4 border-r-8 border-yellow-600 rounded-2xl pr-5">
                        <h1 className="text-3xl font-bold mb-4">Personalized Concierge Assistance</h1>
                        <p className="font-semibold text-justify ">At Gourmet Haven, your dining experience begins with a warm welcome from our concierge team. They take the time to understand your preferences and dietary restrictions, ensuring that every aspect of your visit is tailored to your liking. Whether you have a special request or need assistance with menu choices, our concierge team is there to make your experience seamless and memorable.</p>
                    </div>
                </div>
                <div className=" gap-2 md:gap-5 lg:gap-8 flex justify-between items-center shadow-2xl  rounded-2xl">
                    <div className="h-full w-full">
                        <img className=" w-full h-full rounded-2xl" src="https://i.ibb.co/vqYbr12/OIP.jpg" alt="Seasonal Tasting Menus"/>
                    </div>
                    <div className="py-4 border-r-8 border-yellow-600 rounded-2xl pr-5">
                        <h1 className="text-3xl font-bold mb-4">Seasonal Tasting Menus</h1>
                        <p className="font-semibold text-justify ">Gourmet Haven takes pride in offering a rotating selection of seasonal tasting menus that showcase the freshest and most exquisite ingredients available. These carefully curated menus reflect the creativity of our chefs and provide a unique culinary journey with each visit. Guests can choose from a range of tasting menus that cater to different palates and dietary requirements.</p>
                    </div>
                </div>
                <div className=" gap-2 md:gap-5 lg:gap-8 flex justify-between items-center shadow-2xl  rounded-2xl">
                    <div className="h-full w-full">
                        <img className=" w-full h-full rounded-2xl" src="https://i.ibb.co/XkV6NMV/R.png" alt="Private Dining and Event Hosting"/>
                    </div>
                    <div className="py-4 border-r-8 border-yellow-600 rounded-2xl pr-5">
                        <h1 className="text-3xl font-bold mb-4">Private Dining and Event Hosting</h1>
                        <p className="font-semibold text-justify ">Gourmet Haven offers private dining spaces for intimate gatherings, special occasions, and corporate events. Our dedicated event planning team will work closely with you to create a bespoke dining experience, from custom menus to personalized decor. Whether you're celebrating a milestone or hosting a business meeting, Gourmet Haven's private dining service will ensure your event is a resounding success.</p>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl">
                <img src="https://i.ibb.co/nkhFc9N/R.jpg" alt="" className="w-full h-full rounded-2xl"/>
            </div>
        </section>
    
  );
};

export default ServiceFeature;