"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import KanbanBoard from "@/components/KanbanBoard";
import { useRouter } from "next/navigation";

export default function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState();
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (projectName.trim() && description.trim() && dueDate) {
      setStep(2);
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would save the project data
    alert("Project created successfully!");
    // Redirect to projects page or dashboard
    router.push("/onboarding");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

      {step === 1 ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project"
                  required
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="dueDate"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dueDate && "text-muted-foreground"
                      )}
                      type="button"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dueDate ? format(dueDate, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dueDate}
                      onSelect={setDueDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team">Team Members</Label>
                <div className="flex items-center border rounded-md p-2">
                  <Users className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-muted-foreground">
                    Select team members (Optional)
                  </span>
                </div>
              </div>

              <Button type="button" className="w-full" onClick={handleNext}>
                Continue to Project Board
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-0">
              <KanbanBoard />
            </CardContent>
          </Card>

          <div className="flex justify-between max-w-5xl mx-auto">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back to Details
            </Button>
            <Button onClick={handleSubmit}>Save Project</Button>
          </div>
        </div>
      )}
    </div>
  );
}
