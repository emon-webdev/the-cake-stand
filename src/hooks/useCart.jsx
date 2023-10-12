import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const { user, loading } = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axios] = useAxiosSecure()
    const { isLoading, refetch, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`/carts?email=${user?.email}`)

            return res.data
        },
    })

    return [cart, refetch, isLoading, error, refetch]
};

export default useCart;