"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Welcome to ProjectPilot
      </h1>

      <div className="max-w-3xl mx-auto grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              You're all set! Start managing your projects with our powerful
              tools.
            </p>
            <Link href="/project/create">
              <Button>Create Your First Project</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
