import { LoginResponse, ReviewRequest } from '@/lib/models';
import { useSendReview } from '@/services/hook/useLot';
import { GetLocalStr } from '@/services/utils/storage';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';
import PageMark from './PageMark';
import { customToast } from './Toast';

export const LeaveCommentForm = ({ lotId }: { lotId: number }) => {
    const [leaveReview, setLeaveReview] = useState("");
    const [rating, setRating] = useState(0);
    const userLogin = GetLocalStr<LoginResponse>("loginResponse");
    const sendReviewMutation = useSendReview();

    const handleSendReview = () => {
        if (rating === 0 || leaveReview.trim() === "") {
            customToast.warning("Vui lòng chọn số sao và nhập nội dung đánh giá.");
            return;
        }

        if (leaveReview.trim() === "") {
            return;
        }

        const review: ReviewRequest = {
            lotId: lotId,
            comment: leaveReview,
            rating: rating,
            email: userLogin?.email || "",
        };

        sendReviewMutation.mutate(review, {
            onSuccess: () => {
                setLeaveReview("");
            },
        });
    }
    return (
        <Card className="md:col-span-12 rounded-lg overflow-hidden">
            <PageMark title="Lượt thích" icon={Heart} />

            <div className="flex gap-2">
                <Avatar className="w-10 h-10">
                    <img src="/images/dalat.png" alt="Nguyễn Văn A" />
                </Avatar>

                <div className="flex-1">
                    <div className="mb-1">
                        <span className="text-lg font-medium">{userLogin?.fullName}</span> <br />
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                        {Array(5)
                            .fill(0)
                            .map((_, index) => {
                                const value = index + 1;
                                return (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => setRating(value)}
                                        className="focus:outline-none cursor-pointer"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill={value <= rating ? "gold" : "none"}
                                            stroke="gold"
                                            strokeWidth="2"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 
              18.18 21.02 12 17.77 5.82 21.02 7 14.14 
              2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </button>
                                );
                            })}
                    </div>
                    <div className="border rounded-md">
                        <Textarea
                            placeholder="Để lại đánh giá..."
                            className="resize-none border-0"
                            onChange={(e) => setLeaveReview(e.target.value)}
                            rows={2}

                        />
                    </div>

                    <div className="flex justify-end mt-2">
                        <Button
                            size="sm"
                            className="bg-black text-white hover:bg-black/80 rounded"
                            onClick={() => {
                                handleSendReview();
                            }}
                        >
                            Gửi
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
