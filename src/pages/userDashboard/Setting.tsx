import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useNavigate} from "react-router-dom";
const Setting: React.FC = () => {
  const navigate = useNavigate();
  // const handleDeleteAccount = () => {
  //   // Implement account deletion logic here
  //   console.log("Account deletion initiated");
  // };

  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Account Settings
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your profile, security, and subscription preferences.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-4">
            Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <Input placeholder="John Doe" />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <Input
                type="email"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <Button className="mt-4 bg-blue-500 cursor-pointer hover:bg-blue-600">
            Update Profile
          </Button>
        </div>

        {/* Password Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-4">
            Change Password
          </h2>

          <div className="grid gap-4">
            <Input
              type="password"
              placeholder="Current Password"
            />

            <Input
              type="password"
              placeholder="New Password"
            />

            <Input
              type="password"
              placeholder="Confirm New Password"
            />
          </div>

          <Button className="mt-4 bg-blue-500 cursor-pointer hover:bg-blue-600">
            Change Password
          </Button>
        </div>

        {/* Subscription Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-4">
            Subscription Plan
          </h2>

          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl">
            <div>
              <p className="font-medium">Current Plan</p>
              <p className="text-blue-400 font-bold">
                FREE PLAN
              </p>
            </div>

            <Button className="bg-gray-600 cursor-pointer" onClick={() => {navigate('/dashboard/subscription')}}>
              Upgrade Plan
            </Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                className="w-5 h-5"
                defaultChecked
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Task Reminders</span>
              <input
                type="checkbox"
                className="w-5 h-5"
                defaultChecked
              />
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Danger Zone
          </h2>

          <p className="text-gray-600 mb-4">
            Permanently delete your account and all tasks.
          </p>

          <Button
            variant="destructive"
            className="cursor-pointer"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;