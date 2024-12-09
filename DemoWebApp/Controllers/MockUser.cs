namespace DemoWebApp.Controllers;
public static class MockUser
{
    public static List<User> Users = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "some1@email.com" },
                new User { Id = 2, Name = "Jane Doe", Email = "some1@email.com" },
                new User { Id = 3, Name = "John Smith", Email = "some1@email.com" },
                new User { Id = 4, Name = "Jane Smith", Email = "some1@email.com" },
                new User { Id = 5, Name = "John Brown", Email = "some1@email.com" },

            };
    public static List<User> GetUsers()
    {
        return Users;

    }

    public static User GetUser(int id)
    {
        return Users.FirstOrDefault(u => u.Id == id);
    }

    public static void AddUser(User user)
    {
        Users.Add(user);
    }

    public static void UpdateUser(int id, User user)
    {
        var existingUser = Users.FirstOrDefault(u => u.Id == id);
        if (existingUser != null)
        {
            existingUser.Name = user.Name;
            existingUser.Email = user.Email;
        }
    }

    public static void DeleteUser(int id)
    {
        var existingUser = Users.FirstOrDefault(u => u.Id == id);
        if (existingUser != null)
        {
            Users.Remove(existingUser);
        }
    }
}

