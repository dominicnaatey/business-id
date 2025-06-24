"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Plus, 
  QrCode, 
  BarChart3, 
  Users, 
  Settings, 
  CreditCard, 
  Globe,
  Eye,
  Share2,
  Edit3,
  Trash2,
  MoreVertical,
  Search,
  Filter,
  Download,
  Calendar,
  TrendingUp,
  Users as UsersIcon,
  Smartphone
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const mockCards = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
      company: "TechCorp",
      views: 1247,
      shares: 89,
      status: "active",
      lastUpdated: "2 hours ago",
      qrCode: "https://businessid.com/john-doe"
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Director",
      company: "GrowthCo",
      views: 892,
      shares: 45,
      status: "active",
      lastUpdated: "1 day ago",
      qrCode: "https://businessid.com/jane-smith"
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "Sales Manager",
      company: "SalesPro",
      views: 567,
      shares: 23,
      status: "draft",
      lastUpdated: "3 days ago",
      qrCode: "https://businessid.com/mike-johnson"
    }
  ];

  const mockStats = [
    { label: "Total Views", value: "2,847", change: "+12%", icon: Eye },
    { label: "Card Shares", value: "156", change: "+8%", icon: Share2 },
    { label: "Active Cards", value: "3", change: "+1", icon: UsersIcon },
    { label: "QR Scans", value: "892", change: "+23%", icon: QrCode }
  ];

  const filteredCards = mockCards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold gradient-text">BusinessID</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {mockStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="text-green-500" size={16} />
                <span className="ml-1 text-sm text-green-600">{stat.change}</span>
                <span className="ml-2 text-sm text-gray-500">from last month</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <nav className="space-y-2">
                <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
                  <BarChart3 size={20} />
                  <span className="font-medium">Dashboard</span>
                </Link>
                <Link href="/dashboard/cards" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <QrCode size={20} />
                  <span>My Cards</span>
                </Link>
                <Link href="/dashboard/analytics" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <BarChart3 size={20} />
                  <span>Analytics</span>
                </Link>
                <Link href="/dashboard/team" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Users size={20} />
                  <span>Team</span>
                </Link>
                <Link href="/dashboard/billing" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <CreditCard size={20} />
                  <span>Billing</span>
                </Link>
                <Link href="/dashboard/domains" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Globe size={20} />
                  <span>Domains</span>
                </Link>
              </nav>
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Cards Section */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">My Business Cards</h2>
                    <p className="text-sm text-gray-600 mt-1">Manage and track your digital business cards</p>
                  </div>
                  <button className="button-primary mt-4 sm:mt-0">
                    <Plus size={20} className="mr-2" />
                    Create New Card
                  </button>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search cards..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Cards</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              {/* Cards List */}
              <div className="p-6">
                <div className="space-y-4">
                  {filteredCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {card.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{card.name}</h3>
                          <p className="text-sm text-gray-600">{card.title} at {card.company}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Eye size={14} className="mr-1" />
                              {card.views} views
                            </span>
                            <span className="flex items-center">
                              <Share2 size={14} className="mr-1" />
                              {card.shares} shares
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              card.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {card.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <QrCode size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                          <Share2 size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit3 size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredCards.length === 0 && (
                  <div className="text-center py-12">
                    <QrCode className="mx-auto text-gray-400" size={48} />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No cards found</h3>
                    <p className="mt-2 text-gray-600">Create your first business card to get started</p>
                    <button className="button-primary mt-4">
                      <Plus size={20} className="mr-2" />
                      Create Your First Card
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <QrCode className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">QR Code</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Download QR codes for your business cards</p>
                <button className="w-full button-secondary">Download All</button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="text-green-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">NFC Cards</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Write your contact info to NFC cards</p>
                <button className="w-full button-secondary">Setup NFC</button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Download className="text-purple-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Export Data</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Export your analytics and contact data</p>
                <button className="w-full button-secondary">Export</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 