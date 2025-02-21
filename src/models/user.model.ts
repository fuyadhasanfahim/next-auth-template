import IUser from '@/types/user.interface';
import { model, models, Schema } from 'mongoose';

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = models?.users || model<IUser>('users', userSchema);
export default UserModel;
