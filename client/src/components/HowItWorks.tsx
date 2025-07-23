
import { motion } from "framer-motion";

const doctors = [
  {
    id: 1,
    name: "Dr. Aarti Sharma",
    Qualification:"MBBS, MS (Ortho), Dip M.V.S (Sweden), F.S.O.S",
    specialization: "Orthopaedics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    Qualification:"MBBS, MS, MRCS (Eng), MCh (GI Surgery), PDF (Delhi), FACS",
    specialization: "Liver Transplantation and Hepatobiliary Surgery",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Sneha Kapoor",
    Qualification:"MBBS, M.S, M.Ch (Neurosurgery )",
    specialization: "Neurosciences",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Dr. Aditi Laad",
    Qualification:"MBBS, DNB",
    specialization: "Fetal Medicine",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function AvailableDoctors() {
  return (
    <section className="px-4 md:px-20 pt-20 pb-32 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {doctors.map((doc, index) => (
          <motion.div
            key={doc.id}
            className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={doc.image}
              alt={doc.name}
              width={100}
              height={100}
              className="rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-gray-800">{doc.name}</h4>
            <p className="text-sm text-gray-600">{doc.Qualification}</p>
            <p className="text-sm text-gray-600">{doc.specialization}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
