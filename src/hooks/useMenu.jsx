import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_APP_API_URL}/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // `${import.meta.env.VITE_APP_API_URL}/products/${id}
  const { data: menu = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/menu`);
      return res.json();
    }
  })
  return [menu, loading, refetch];
};

export default useMenu;
