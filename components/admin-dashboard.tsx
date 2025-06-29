"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { emailService } from "@/lib/email-service"
import { Mail, Clock, CheckCircle, XCircle, BarChart3, Users } from "lucide-react"

export function AdminDashboard() {
  const [scheduledEmails, setScheduledEmails] = useState<any[]>([])
  const [analytics, setAnalytics] = useState<any>({})

  useEffect(() => {
    // Refresh data every 30 seconds
    const interval = setInterval(() => {
      setScheduledEmails(emailService.getScheduledEmails())
      setAnalytics(emailService.getEmailAnalytics())
    }, 30000)

    // Initial load
    setScheduledEmails(emailService.getScheduledEmails())
    setAnalytics(emailService.getEmailAnalytics())

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      sent: "default",
      failed: "destructive",
      pending: "secondary",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Email Campaign Dashboard</h1>
        <Button
          onClick={() => {
            setScheduledEmails(emailService.getScheduledEmails())
            setAnalytics(emailService.getEmailAnalytics())
          }}
        >
          Refresh Data
        </Button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.total || 0}</div>
            <p className="text-xs text-muted-foreground">Scheduled & sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sent</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{analytics.sent || 0}</div>
            <p className="text-xs text-muted-foreground">Successfully delivered</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{analytics.pending || 0}</div>
            <p className="text-xs text-muted-foreground">Awaiting delivery</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {analytics.deliveryRate ? `${analytics.deliveryRate.toFixed(1)}%` : "0%"}
            </div>
            <p className="text-xs text-muted-foreground">Success rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Emails Table */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Email Sequences</CardTitle>
          <CardDescription>Monitor all automated email follow-ups and their delivery status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledEmails.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No scheduled emails found</p>
                <p className="text-sm">Email sequences will appear here when users submit forms</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Recipient</th>
                      <th className="text-left p-2">Sequence Type</th>
                      <th className="text-left p-2">Send Time</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledEmails.map((email) => (
                      <tr key={email.id} className="border-b hover:bg-gray-50">
                        <td className="p-2">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                            {email.recipient}
                          </div>
                        </td>
                        <td className="p-2">
                          <Badge variant="outline">
                            {email.sequenceType.charAt(0).toUpperCase() + email.sequenceType.slice(1)}
                          </Badge>
                        </td>
                        <td className="p-2">
                          <div className="text-sm">
                            {email.sendTime.toLocaleDateString()}
                            <br />
                            <span className="text-gray-500">{email.sendTime.toLocaleTimeString()}</span>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(email.status)}
                            {getStatusBadge(email.status)}
                          </div>
                        </td>
                        <td className="p-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => emailService.cancelScheduledEmails(email.recipient)}
                            disabled={email.status === "sent"}
                          >
                            Cancel
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Email Templates Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Email Template Performance</CardTitle>
          <CardDescription>Track which email templates are performing best</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries({
              "Consultation Confirmation": { sent: 45, opened: 42, clicked: 28 },
              "Callback Confirmation": { sent: 32, opened: 29, clicked: 18 },
              "WhatsApp Follow-up": { sent: 28, opened: 26, clicked: 22 },
              "Case Study Email": { sent: 38, opened: 35, clicked: 31 },
              "Final Follow-up": { sent: 15, opened: 12, clicked: 8 },
            }).map(([template, stats]) => (
              <div key={template} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">{template}</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Sent:</span>
                    <span className="font-medium">{stats.sent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Opened:</span>
                    <span className="font-medium text-blue-600">
                      {stats.opened} ({((stats.opened / stats.sent) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clicked:</span>
                    <span className="font-medium text-green-600">
                      {stats.clicked} ({((stats.clicked / stats.sent) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
