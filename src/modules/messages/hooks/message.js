import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessages, getMessages } from "../actions";


export const prefetchMessage = async (queryClient, projectId) => {
    await queryClient.prefetchQuery({
        queryKey: ["messages", projectId],
        queryFn: () => getMessages(projectId),
        staleTime: 1000
    })
}
export const useGetMessages = (projectId) => {
    return useQuery({
        queryKey: ["messages", projectId],
        queryFn: () => getMessages(projectId),
        staleTime: 1000,
        refetchInterval: (data) => {
            return data?.length ? 5000 : false
        }
    })
}

export const useCreateMessage = (projectId) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (value) => createMessages(value, projectId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["messages", projectId]
            })
        }
    })
}