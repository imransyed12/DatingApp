using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserForCreateDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="You must specify password  between 4 and 8 chracters")]
        public string Password { get; set; }
    }
}