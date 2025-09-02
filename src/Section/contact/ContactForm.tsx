import { useState } from "react";
import Input from "../../Components/Common/Input";
import { Mail, CheckCircle2, XCircle } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import DropdownSelect from "../../Components/Common/Dropdown";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("");
  const [message, setMessage] = useState("");
  const [linkedin, setLinkedin] = useState(""); // ✅ new LinkedIn field
const [profileFile, setProfileFile] = useState<string>(""); // ✅ string now
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // ✅ Replace with your Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "2901d84b-5a50-43c2-bf60-8c8276c62725";

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", "DMIF Website");
    formData.append("firstname", firstname);
    formData.append("mobNo", mobNo);
    formData.append("email", email);
    formData.append("track", track);
    formData.append("message", message);
    if (linkedin) formData.append("linkedin", linkedin); // optional
if (profileFile) formData.append("profileDetails", profileFile);


    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        // reset form
        setFirstName("");
        setMobNo("");
        setEmail("");
        setTrack("");
        setMessage("");
        setLinkedin("");
        setProfileFile("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.h2
        className="heading text-center mb-6 sm:mb-8 md:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-base leading-relaxed">
            We’d love to hear from you! If you have any questions, feedback, or
            business inquiries, feel free to reach out to us through our contact
            form, email, or phone.
          </p>

          <div className="pt-4 border-t flex items-center gap-2">
            <p className="text-sm font-semibold text-[#003579] uppercase ">
              Email Address :
            </p>
            <div
              className="flex flex-col cursor-pointer text-gray-700"
              onClick={() =>
                (window.location.href = "mailto:reach@drmadhan.in")
              }
            >
              <p>reach@drmadhan.in</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="bg-white shadow-sm rounded-lg p-4 sm:p-6 md:p-8 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Get In Touch
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Feel free contact with us, we love to make new partners & friends
          </p>

          <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                required
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
              required
              value={track}
              onChange={setTrack}
              options={[
                { label: "Patent-Track", value: "Patent-Track" },
                { label: "Research-Track", value: "Research-Track" },
                { label: "Both", value: "Both" },
              ]}
            />

            {/* ✅ LinkedIn (optional) */}
            <Input
              label="LinkedIn Profile"
              placeholder="https://linkedin.com/in/username"
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />

            {/* ✅ File Upload (optional, docx/pdf) */}
            {/* ✅ Profile Details (instead of file upload) */}
<div className="flex flex-col gap-2">
  <label className="text-gray-800 text-sm font-medium">
    Profile Details
  </label>
  <textarea
    placeholder="Write about your profile, experience, or background..."
    value={profileFile ? String(profileFile) : ""} // replace file state with text
    onChange={(e) => setProfileFile(e.target.value as any)}
    className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    rows={4}
  />
</div>


            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-medium">Message</label>
              <textarea
                placeholder="Message Subject"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                rows={4}
              />
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <IconButton
                type="submit"
                label={loading ? "Sending..." : "Send Message"}
                icon={<Mail size={18} />}
                iconPosition="right"
              />
            </motion.div>
          </form>

          {/* ✅ Success / Error Popup */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg shadow-md`}
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="text-green-600 w-12 h-12 mb-2" />
                    <p className="text-lg font-semibold text-green-700">
                      Thank you for contacting us!
                    </p>
                    <p className="text-gray-600 text-sm mt-1 text-center px-4">
                      Our team will get back to you soon.
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600 w-12 h-12 mb-2" />
                    <p className="text-lg font-semibold text-red-700">
                      Oops! Something went wrong.
                    </p>
                    <p className="text-gray-600 text-sm mt-1 text-center px-4">
                      Please try again later.
                    </p>
                  </>
                )}
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 px-4 py-2 text-sm bg-blue-900 text-white rounded-md hover:bg-blue-800"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
