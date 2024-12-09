using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UserController>
        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return Ok(MockUser.GetUsers());
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            return Ok(MockUser.GetUser(id));
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            MockUser.AddUser(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult<User> Put(int id, [FromBody] User value)
        {
            MockUser.UpdateUser(id, value);
            return Ok(MockUser.GetUser(id));
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            MockUser.DeleteUser(id);
            return Ok(true);
        }
    }
}
