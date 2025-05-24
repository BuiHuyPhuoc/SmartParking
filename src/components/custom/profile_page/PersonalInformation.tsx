import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { LoginResponse } from '@/lib/models'
import { GetLocalStr } from '@/services/utils/storage'

const PersonalInformation = () => {
    const profile = GetLocalStr<LoginResponse>("loginResponse");

    const [formData, setFormData] = useState({
        firstName: profile?.fullName.split(" ")[0] || "No name",
        lastName: profile?.fullName.split(" ").slice(1).join(" ") || "No name",
        email: profile?.email,
        phone: profile?.phone,
        location: "e.g. New York, USA",
        postalCode: "23728167",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
    };

    return (

        <div className="flex flex-col items-center mx-auto p-6 bg-white rounded-lg">
            {/* Profile Picture and Name Header */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative">
                    <div className="rounded-full w-20 h-20 bg-yellow-300 overflow-hidden flex items-center justify-center">
                        {/* This would be an image in production */}
                        <div className="bg-yellow-300 w-full h-full"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-red-500 rounded-full w-4 h-4 border-2 border-white"></div>
                </div>
                <div className="mt-2 text-center">
                    <h2 className="font-medium">
                        {formData.firstName} {formData.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">{profile?.role}</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-8">
                <div className="grid grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm text-gray-600">
                            Tên
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-gray-50"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm text-gray-600">
                            Họ và tên
                        </Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-gray-50"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm text-gray-600">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            className="bg-gray-50"
                            disabled
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm text-gray-600">
                            Phone Number
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-gray-50"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <Button
                        type="submit"
                        className="bg-primary hover:bg-primary-hover text-on-primary hover:text-on-primary-hover py-2 px-8 rounded-md w-full max-w-xs"
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInformation