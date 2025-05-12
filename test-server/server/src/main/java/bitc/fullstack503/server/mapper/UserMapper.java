package bitc.fullstack503.server.mapper;

import bitc.fullstack503.server.entity.UserAccount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM user_account WHERE user_id = #{userId}")
    UserAccount findByUserId(String userId);
}