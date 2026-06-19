import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

   getTasks: builder.query<any, string>({
      query: (status = "all") => ({
        url: `/get-tasks?status=${status}`,
        method: "GET",
      }),
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: "/create-tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/update-task/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/delete-task-Byid/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),

  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;