import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must be at most 50 characters long"],
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },

    currency: {
        type: String,
        required: [true, "Currency is required"],
        enum: ["USD", "EUR", "GBP", "INR"],
        default: "INR",
    },

    frequency: {
        type: String,
        required: [true, "Frequency is required"],
        enum: ["daily", "weekly", "monthly", "yearly"],
        default: "monthly",
    },

    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["sports", "news", "entertainment", "education", "lifestyle", "technology", "finance", "health"],
    },

    paymentMethod: {
        type: String,
        required: [true, "Payment method is required"],
        trim: true,
    },

    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["active", "inactive"],
        default: "active",
    },

    startDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: "Start date must in past or present",
        },
    },

    renewalDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: function (value) {
                return value > startDate
            },
            message: "Renewal date must be a future date",
        },
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
        index: true,
    },

}, {timestamps: true});

// Automatically caluclute renewal date if not provided
subscriptionSchema.pre("validate", function (next) {
    if (!this.renewalDate) {
        this.renewalDate = new Date(this.startDate);
        switch (this.frequency) {
            case "daily":
                this.renewalDate.setDate(this.renewalDate.getDate() + 1);
                break;
            case "weekly":
                this.renewalDate.setDate(this.renewalDate.getDate() + 7);
                break;
            case "monthly":
                this.renewalDate.setMonth(this.renewalDate.getMonth() + 1);
                break;
            case "yearly":
                this.renewalDate.setFullYear(this.renewalDate.getFullYear() + 1);
                break;
        }
    }

    if (this.renewalDate < new Date()) {
        this.status = "inactive";
    }

    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;