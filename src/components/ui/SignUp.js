import { useState, react } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/common/Card";
import { Label } from "@/components/common/Label";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/Select";
import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import { Badge } from "@/components/common/Badge";
import TermsModal from "@/components/ui/TermsModal";
import {
  Loader2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export default function CompleteVolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    dateOfBirth: "",
    volunteerReason: "",
    areasOfInterest: [],
    volunteerRole: "",
    designation: "",
    availability: {
      weekdays: false,
      weekends: false,
      evenings: false,
    },
    previousExperience: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [skillsArray, setSkillsArray] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const volunteerRoles = [
    "Mentor",
    "Coordinator",
    "Event Organizer",
    "Fundraiser",
    "Volunteer Lead",
  ];

  const areasOfInterestOptions = [
    "Education",
    "Healthcare",
    "Environment",
    "Animal Welfare",
    "Community Service",
    "Arts & Culture",
    "Sports & Recreation",
    "Technology",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setAcceptTerms((prev) => !prev); // Toggle checkbox state
  };

  const handleAvailabilityChange = (key) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: !prev.availability[key],
      },
    }));
  };

  const handleAreasOfInterestChange = (area) => {
    setFormData((prev) => {
      const updatedAreas = prev.areasOfInterest.includes(area)
        ? prev.areasOfInterest.filter((a) => a !== area)
        : [...prev.areasOfInterest, area];
      return {
        ...prev,
        areasOfInterest: updatedAreas,
      };
    });
  };

  const handleSkillAdd = () => {
    if (currentSkill.trim() && !skillsArray.includes(currentSkill.trim())) {
      setSkillsArray([...skillsArray, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkillsArray(skillsArray.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Become a Volunteer
          </h1>
          <p className="text-xl text-gray-600">
            Join our community and make a difference
          </p>
        </div>

        {isSubmitted ? (
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600">
                Your volunteer application has been submitted successfully.
                We&apos;ll be in touch soon!
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application</CardTitle>
              <CardDescription>
                Tell us about yourself and how you&apos;d like to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        name="fullName"
                        className="pl-9"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        className="pl-9"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="pl-9"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="city"
                        name="city"
                        className="pl-9"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="pl-9"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="designation">Current Designation</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="designation"
                        name="designation"
                        className="pl-9"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 ">
                  <div className="space-y-2">
                    <Label htmlFor="volunteerRole">Preferred Role</Label>
                    <Select
                      onValueChange={(value) => {
                        setFormData((prev) => ({
                          ...prev,
                          volunteerRole: value, // Update state on selection
                        }));
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue
                          value={formData.volunteerRole} // Show selected value
                          placeholder="Select your preferred role"
                        />
                      </SelectTrigger>
                      {volunteerRoles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Label>Areas of Interest</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                      {areasOfInterestOptions.map((area) => (
                        <div
                          key={area}
                          className={`p-2 rounded-md border cursor-pointer transition-all ${
                            formData.areasOfInterest.includes(area)
                              ? "bg-primary text-white"
                              : "hover:border-primary"
                          }`}
                          onClick={() => handleAreasOfInterestChange(area)}
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex space-x-2">
                      <Input
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        placeholder="Add a skill"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSkillAdd();
                          }
                        }}
                      />
                      <Button type="button" onClick={handleSkillAdd}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skillsArray.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => removeSkill(skill)}
                        >
                          {skill} ×
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteerReason">
                      Why do you want to volunteer?
                    </Label>
                    <Textarea
                      id="volunteerReason"
                      name="volunteerReason"
                      value={formData.volunteerReason}
                      onChange={handleChange}
                      className="h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(formData.availability).map(
                        ([key, value]) => (
                          <Button
                            key={key}
                            type="button"
                            variant={value ? "default" : "outline"}
                            onClick={() => handleAvailabilityChange(key)}
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms} // Bind checkbox state
                    onCheckedChange={handleCheckboxChange} // Use the handler to toggle
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I accept the terms and conditions, which includes that your
                    information will be used to provide certifications of
                    successful completion of your role.{" "}
                    <span
                      className="text-primary cursor-pointer hover:underline"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Read terms and conditions
                    </span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !acceptTerms} // Disable if not accepted
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
