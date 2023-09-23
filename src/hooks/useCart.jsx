import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, refetch, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        },

    })

    return [cart, refetch, isLoading, error, refetch]
};

export default useCart;