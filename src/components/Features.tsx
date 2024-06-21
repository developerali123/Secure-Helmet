import { Fragment } from 'react';

export default function Features() {
  return (
    <div className="bg-[#EE8D6E] p-5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Helmet Features
        </h2>
        <ul>
          <li className="mb-2">
            <span className="font-semibold">Accident Detection:</span> Secure uses advanced sensors to
            detect an accident and instantly send a distress signal.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Location Sharing:</span> In the event of an accident, Secure
            will share your exact location with your designated contacts,
            ensuring that help reaches you as soon as possible.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Easy to Use:</span> Secure is easy to attach to your helmet
            and does not interfere with your riding experience.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Reliable:</span> Our device is designed to work under harsh
            weather conditions and even in remote areas with limited network
            coverage.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Peace of Mind:</span> With Secure, you can focus on your ride
            and leave the safety concerns to us.
          </li>
        </ul>
      </div>
    </div>
  );
}
