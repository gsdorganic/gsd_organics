import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const jobs = [
  {
    id: 1,
    title: 'Sales Executive - Organic Products',
    location: 'GSD Organics, Rajasthan',
    type: 'Full-time',
    description: 'Promote and sell organic products to retailers and customers. Manage orders and build client relationships.'
  },
  {
    id: 2,
    title: 'Production Assistant - Herbal Products',
    location: 'Manufacturing Unit, Rajasthan',
    type: 'Full-time',
    description: 'Assist in production, packaging, and quality control of organic products like oils, soaps, and powders.'
  },
  {
    id: 3,
    title: 'Digital Marketing Intern',
    location: 'Remote / Rajasthan Office',
    type: 'Internship',
    description: 'Help in social media marketing, SEO, and content creation for organic products.'
  },
  {
    id: 4,
    title: 'Customer Support Executive',
    location: 'GSD Hospital Campus',
    type: 'Full-time',
    description: 'Handle product inquiries, orders, and post-sales support through calls and emails.'
  }
];

const JobList = () => {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <Card key={job.id} className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">{job.location}</p>
            <p className="text-sm text-gray-500 mb-3">{job.type}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <Button className="w-full">Apply Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobList;
