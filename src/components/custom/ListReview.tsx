import { useGetReviewByLotId } from '@/services/hook/useLot';
import { Avatar } from '@radix-ui/react-avatar';
import { format } from 'date-fns';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export const ListReview = ({ idLot }: { idLot: number }) => {
    const { data: reviews } = useGetReviewByLotId(idLot);
    const [countReview, setCountReview] = useState(5);
    const handleShowMore = () => {
        setCountReview((prev) => prev + 5);
    };

    return (
        <>
            <div className='md:col-span-12 flex flex-col items-center justify-center'>
                {
                    reviews?.slice(0, countReview).map((review) => (
                        <Card className="w-full rounded-lg overflow-hidden mb-2">
                            <div className="flex gap-2">
                                <Avatar className="w-10 h-10">
                                    <img src="/images/dalat.png" alt="Nguyễn Văn A" />
                                </Avatar>
                                <div>
                                    <div className="text-gray-500 text-xs">{format(new Date(review.createdAt), "dd/MM/yyyy")}</div>
                                    <p className="font-bold text-lg">{review.user.fullName}</p>
                                    <p className="text-base text-primary/80">
                                        {review.comment}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        {Array(review.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <svg
                                                    key={i}
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="gold"
                                                    stroke="gold"
                                                    strokeWidth="1"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                            ))}
                                        <span className="ml-1 text-xs">{review.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                    )
                }

                <Button
                    className='w-fit bg-primary text-on-primary hover:bg-primary/80 mt-4'
                    onClick={handleShowMore}
                >
                    Xem thêm đánh giá
                </Button>
            </div>
        </>
    );
}