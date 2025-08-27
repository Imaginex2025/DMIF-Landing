import { useState } from "react";
import Input from "../../Components/Common/Input";
import { Mail } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import DropdownSelect from "../../Components/Common/Dropdown";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h2 className="heading text-center mb-10">Contact Us</h2>

      {/* Content Wrapper */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 text-base leading-relaxed">
            We’d love to hear from you! If you have any questions, feedback, or
            business inquiries, feel free to reach out to us through our contact
            form, email, or phone.
          </p>

          <div className="pt-4 border-t flex items-center gap-2">
            <p className="text-sm font-semibold text-[#003579] uppercase ">
              Email Address :
            </p>
            <div className="flex flex-col cursor-pointer text-gray-700" onClick={() => (window.location.href = "mailto:reach@drmadhan.in")}>
              <p>reach@drmadhan.in</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <p className="text-sm text-gray-500 mb-6">
            Feel free contact with us, we love to make new partners & friends
          </p>

          <form className="flex flex-col gap-4">
            {/* Row: First Name + Mob No */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="First name..."
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                label="Mob No"
                placeholder="91+"
                value={mobNo}
                onChange={(e) => setMobNo(e.target.value)}
              />
            </div>

            <Input
              label="Email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <DropdownSelect
              label="Choose a Track"
              name="track"
              value={track}
              onChange={setTrack}
              options={[
                { label: "Patent_track", value: "Patent_track" },
                { label: "Research-Track", value: "Research-Track" },
                { label: "Both", value: "Both" },
              ]}
            />

            {/* Message textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="Message Subject"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                rows={4}
              />
            </div>

            {/* Submit button */}
            <IconButton
              label="Send Message"
              icon={<Mail size={18} />}
              iconPosition="right"
              onClick={() => alert("Message Sent!")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
