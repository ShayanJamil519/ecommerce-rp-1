import { useContactUs } from "../../hooks/auth-hook";
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useContactUs(JSON.stringify(contact));

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("contact: ", contact);

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.error) {
            toast.error(response?.data?.error);
          }
          if (response?.data?.message) {
            toast.success(response?.data?.message);
          }
        },
      }
    );
  };

  return (
    <form
      className="w-[90%] md:w-[80%] mx-auto  my-10 bg-[#000] py-10 px-5 sm:px-20 lg:px-20 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[#fff] text-xl text-center mb-10">
        Give us your feedback/queries
      </h1>

      <input
        required
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        className="text-[#fff] bg-transparent py-2 px-2 border-b-[1px] border-[#afafaf]  mb-5 w-full focus:outline-none focus:border-[#fff]"
      />

      <input
        required
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        className="text-[#fff] py-2 px-2 bg-transparent border-b-[1px] mb-8 w-full focus:outline-none border-[#afafaf]  focus:border-[#fff]"
      />

      <textarea
        required
        placeholder="Drop us a message"
        name="message"
        onChange={handleChange}
        className="min-h-[200px] text-[#fff] py-3 px-3 rounded-xl border-[1px] border-[#afafaf]  focus:border-[#fff] bg-transparent  w-full focus:outline-none"
      ></textarea>

      <div className="text-center mt-10">
        <button
          className="border-none text-[#000] px-10 py-3 font-semibold rounded-xl  uppercase bg-[#fff]"
          type="submit"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Contact;
