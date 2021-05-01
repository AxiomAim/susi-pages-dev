export class UserModel {

    constructor(
        id: string, 
        email: string, 
        userType?: string,
        companyName?: string,
        phone?: string,
        news?: boolean,
        firstName?: string,
        lastName?: string,
        avatar?: string,
        fcmToken?: string,
        superAdmin?: boolean,
        createdAt?: string,
        updatedAt?: string,
        deletedAt?: string
        ) {
        this.id = id;
        this.email = email;
        this.userType = userType;
        this.companyName = companyName;
        this.phone = phone;
        this.news = news;
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.fcmToken = fcmToken;
        this.superAdmin = superAdmin;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    public id:string;
    public email: string;
    public userType?: string;
    public companyName?: string;
    public phone?: string;
    public news?: boolean;
    public firstName?: string;
    public lastName?: string;
    public avatar?: string;
    public fcmToken?: string;
    public superAdmin?: boolean;
    public createdAt?: string;
    public updatedAt?: string;
    public deletedAt?: string;

    public static fromDto(user: UserDto): UserModel {
        return new UserModel(
            user.id, 
            user.email, 
            user.userType,
            user.companyName,
            user.phone,
            user.news,
            user.firstName,
            user.lastName,
            user.avatar,
            user.fcmToken,
            user.superAdmin,
            user.createdAt,
            user.updatedAt,
            user.deletedAt
            );
    }

    public static emptyDto(): UserDto {
        const datetime = new Date().toISOString();
        return {
            id: null,
            email: null,
            userType: null,
            companyName: null,
            phone: null,
            news: true,
            firstName: null,
            lastName: null,
            avatar: null,
            fcmToken: null,
            superAdmin: false,
            createdAt: datetime,
            updatedAt: datetime,
            deletedAt: null
        }
    }

    public toDto(): UserDto {
        return {
            id: this.id,
            email: this.email,
            userType: this.userType,
            companyName: this.companyName,
            phone: this.phone,
            news: this.news,
            firstName: this.firstName,
            lastName: this.lastName,
            avatar: this.avatar,
            fcmToken: this.fcmToken,
            superAdmin: this.superAdmin,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        };
    }
}

export interface UserDto {
    id: string;             // Unique ID
    email: string;          // Email (also serves at user name to login)
    userType?: string;      // User Type (Manufacturer, Distributor, Customer, Other)
    companyName?: string;   // Company Name
    phone?: string;         // Phone
    news?: boolean;         // Receive News Updates (true of false)
    firstName?: string;     // First Name
    lastName?: string;      // Last Name
    avatar?: string;        // Avatar URL (Picture)
    fcmToken?: string;      // Not Used
    superAdmin?: boolean;   // User has Admin Privileges
    createdAt?: string;     // Date Create
    updatedAt?: string;     // Date Last Updated
    deletedAt?: string;     // Date Deleted
}