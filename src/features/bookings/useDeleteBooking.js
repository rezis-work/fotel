import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deletingBooking, isLoading: isDeletingBooking } = useMutation(
    {
      mutationFn: (bookingId) => deleteBooking(bookingId),
      onSuccess: () => {
        toast.success("Booking was succesfully deleted");
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: (err) => toast.error(err.message),
    }
  );
  return { deletingBooking, isDeletingBooking };
}
