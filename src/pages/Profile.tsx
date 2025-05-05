
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Profile = () => {
  const { toast } = useToast();
  
  // Mock user data for demonstration
  const [user, setUser] = useState({
    firstName: 'Hendrikus',
    lastName: 'Olmedo',
    email: 'hendrikus@gmail.com',
    phone: '(123) 456-7890',
    loyaltyPoints: 240,
    nextReward: 250,
  });
  
  // Mock appointments data
  const appointments = [
    {
      id: 1,
      date: 'May 12, 2025',
      time: '10:00 AM',
      service: 'Haircut',
      barber: 'Alex Rodriguez',
      status: 'upcoming',
    },
    {
      id: 2,
      date: 'April 10, 2025',
      time: '2:30 PM',
      service: 'Beard Trim',
      barber: 'David Smith',
      status: 'completed',
    },
    {
      id: 3,
      date: 'March 15, 2025',
      time: '11:00 AM',
      service: 'Haircut & Beard',
      barber: 'Michael Johnson',
      status: 'completed',
    },
  ];

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully!",
    });
  };

  const handleCancelAppointment = (id: number) => {
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled. You will receive a confirmation email shortly.",
    });
  };

  const progressPercentage = (user.loyaltyPoints / user.nextReward) * 100;

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">My Profile</h1>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="appointments">My Appointments</TabsTrigger>
                <TabsTrigger value="loyalty">Loyalty Program</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointments">
                <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
                
                {appointments.length > 0 ? (
                  <div className="space-y-4">
                    {appointments.filter(appointment => appointment.status === 'upcoming').length > 0 && (
                      <>
                        <h3 className="text-lg font-medium">Upcoming Appointments</h3>
                        {appointments
                          .filter(appointment => appointment.status === 'upcoming')
                          .map((appointment) => (
                            <Card key={appointment.id}>
                              <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row justify-between">
                                  <div>
                                    <div className="flex items-center mb-2">
                                      <h3 className="text-lg font-bold">{appointment.service}</h3>
                                      <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                                        Upcoming
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-1">
                                      <span className="font-medium">Date:</span> {appointment.date} at {appointment.time}
                                    </p>
                                    <p className="text-muted-foreground">
                                      <span className="font-medium">Barber:</span> {appointment.barber}
                                    </p>
                                  </div>
                                  <div className="flex space-x-2 mt-4 md:mt-0">
                                    <Button variant="outline" className="border-barber-brown text-barber-brown hover:bg-barber-brown/10">
                                      Reschedule
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      className="border-red-500 text-red-500 hover:bg-red-50"
                                      onClick={() => handleCancelAppointment(appointment.id)}
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </>
                    )}
                    
                    {appointments.filter(appointment => appointment.status === 'completed').length > 0 && (
                      <>
                        <h3 className="text-lg font-medium mt-8">Past Appointments</h3>
                        {appointments
                          .filter(appointment => appointment.status === 'completed')
                          .map((appointment) => (
                            <Card key={appointment.id}>
                              <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row justify-between">
                                  <div>
                                    <div className="flex items-center mb-2">
                                      <h3 className="text-lg font-bold">{appointment.service}</h3>
                                      <Badge className="ml-2 bg-gray-100 text-gray-600 hover:bg-gray-100">
                                        Completed
                                      </Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-1">
                                      <span className="font-medium">Date:</span> {appointment.date} at {appointment.time}
                                    </p>
                                    <p className="text-muted-foreground">
                                      <span className="font-medium">Barber:</span> {appointment.barber}
                                    </p>
                                  </div>
                                  <div className="flex space-x-2 mt-4 md:mt-0">
                                    <Button className="bg-barber-gold hover:bg-barber-gold/90 text-black">
                                      Book Again
                                    </Button>
                                    <Button variant="outline">
                                      Leave Review
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500 mb-4">You don't have any appointments yet.</p>
                    <Button className="bg-barber-gold hover:bg-barber-gold/90 text-black">Book Your First Appointment</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="loyalty">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Loyalty Program</h2>
                    
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium">Current Points</h3>
                          <span className="text-3xl font-bold text-barber-gold">{user.loyaltyPoints}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          You need {user.nextReward - user.loyaltyPoints} more points for your next reward
                        </p>
                        <Progress value={progressPercentage} className="h-2" />
                      </CardContent>
                    </Card>
                    
                    <h3 className="text-lg font-bold mb-4">How It Works</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-medium">Earn Points</h4>
                        <p className="text-sm text-gray-600">Earn 10 points for every $1 spent on services and products</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-medium">Get Rewards</h4>
                        <p className="text-sm text-gray-600">Redeem your points for discounts, free services, or products</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-medium">Special Perks</h4>
                        <p className="text-sm text-gray-600">Get birthday offers, early access to promotions, and exclusive member events</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4">Available Rewards</h3>
                    <div className="space-y-4">
                      <Card className="bg-gradient-to-br from-barber-brown to-barber-brown/80 text-white">
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-1">Free Beard Trim</h4>
                          <p className="text-sm mb-3">Get a complimentary beard trim with any service</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs">250 points</span>
                            <Button size="sm" className="bg-barber-gold hover:bg-barber-gold/90 text-black">Redeem</Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-1">25% Off Any Service</h4>
                          <p className="text-sm text-muted-foreground mb-3">Save on your next appointment</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">500 points</span>
                            <Button size="sm" variant="outline" disabled>Redeem</Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-1">Free Premium Haircut</h4>
                          <p className="text-sm text-muted-foreground mb-3">Enjoy our signature haircut service</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">750 points</span>
                            <Button size="sm" variant="outline" disabled>Redeem</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                    <Card>
                      <CardContent className="p-6">
                        <form onSubmit={handleUpdateProfile}>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input 
                                  id="firstName" 
                                  value={user.firstName} 
                                  onChange={(e) => setUser({...user, firstName: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input 
                                  id="lastName" 
                                  value={user.lastName}
                                  onChange={(e) => setUser({...user, lastName: e.target.value})}
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input 
                                id="phone" 
                                type="tel" 
                                value={user.phone}
                                onChange={(e) => setUser({...user, phone: e.target.value})}
                              />
                            </div>
                            <Button type="submit" className="bg-barber-brown hover:bg-barber-brown/90">
                              Save Changes
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4">Password & Security</h3>
                    <Card>
                      <CardContent className="p-6">
                        <form>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="currentPassword">Current Password</Label>
                              <Input id="currentPassword" type="password" />
                            </div>
                            <div>
                              <Label htmlFor="newPassword">New Password</Label>
                              <Input id="newPassword" type="password" />
                            </div>
                            <div>
                              <Label htmlFor="confirmPassword">Confirm New Password</Label>
                              <Input id="confirmPassword" type="password" />
                            </div>
                            <Button type="submit" className="bg-barber-brown hover:bg-barber-brown/90">
                              Update Password
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                    
                    <h3 className="text-lg font-bold mt-8 mb-4">Preferences</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Email Notifications</h4>
                              <p className="text-sm text-muted-foreground">Receive emails about appointments</p>
                            </div>
                            <input 
                              type="checkbox" 
                              className="h-6 w-6 rounded border-gray-300 text-barber-gold focus:ring-barber-gold"
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">SMS Reminders</h4>
                              <p className="text-sm text-muted-foreground">Get text messages before appointments</p>
                            </div>
                            <input 
                              type="checkbox" 
                              className="h-6 w-6 rounded border-gray-300 text-barber-gold focus:ring-barber-gold"
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Marketing Communications</h4>
                              <p className="text-sm text-muted-foreground">Receive offers and promotions</p>
                            </div>
                            <input 
                              type="checkbox" 
                              className="h-6 w-6 rounded border-gray-300 text-barber-gold focus:ring-barber-gold"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
