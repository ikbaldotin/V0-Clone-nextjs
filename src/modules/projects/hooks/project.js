import { useQuery, useMutation, useQueryClient, QueryClient } from "@tanstack/react-query";
import { createProject, getProjectById, getProjects } from "../actions";

export const useGetProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: () => getProjects()
    })
}
export const useCreateProjects = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (value) => createProject(value),
        onSuccess: () => queryClient.invalidateQueries(["projects"])
    })
}
export const useGetProjectById = (projectId) => {
    return useQuery({
        queryKey: ["project", projectId],
        queryFn: () => getProjectById(projectId)
    })
}