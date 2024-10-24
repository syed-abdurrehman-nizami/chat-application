import React, { useState } from 'react'
import { Menu, Search, Smile, Send, MoreVertical, Phone, Video, User } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'

function ChatApp() {
    const [message, setMessage] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim()) {
            console.log('Sending message:', message)
            setMessage('')
        }
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
            >
                <div className="flex h-full flex-col">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between border-b p-4">
                        <h2 className="text-xl font-semibold">Chats</h2>
                        <button className="rounded-full p-1 hover:bg-gray-200 lg:hidden" onClick={toggleSidebar}>
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="p-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search chats"
                                className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="flex items-center border-b p-4 hover:bg-gray-50">
                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
                                <div className="ml-3">
                                    <p className="font-semibold">User {index + 1}</p>
                                    <p className="text-sm text-gray-500">Last message...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex flex-1 flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b bg-white p-4 shadow-sm">
                    <div className="flex items-center">
                        <button className="mr-4 rounded-full p-1 hover:bg-gray-200 lg:hidden" onClick={toggleSidebar}>
                            <Menu size={24} />
                        </button>
                        <h1 className="text-xl font-semibold">Chat with User</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="rounded-full p-2 hover:bg-gray-200">
                            <Phone size={20} />
                        </button>
                        <button className="rounded-full p-2 hover:bg-gray-200">
                            <Video size={20} />
                        </button>
                        <button className="rounded-full p-2 hover:bg-gray-200">
                            <MoreVertical size={20} />
                        </button>
                        <div className="">
                            {/* <User className="h-full w-full p-2 text-gray-600" /> */}
                            <UserButton />
                        </div>
                    </div>
                </div>

                {/* Message History */}
                <div className="flex-1 overflow-y-auto p-4">
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className={`mb-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs rounded-lg p-3 ${index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                            >
                                <p>This is a sample message.</p>
                                <p className="mt-1 text-xs opacity-75">12:34 PM</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="border-t bg-white p-4">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                        <button type="button" className="mr-2 rounded-full p-2 hover:bg-gray-200">
                            <Smile size={24} className="text-gray-500" />
                        </button>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 rounded-full bg-gray-100 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="ml-2 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ChatApp