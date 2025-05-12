// UserServiceImpl.java
package bitc.fullstack503.server.service;

import bitc.fullstack503.server.entity.UserAccount;
import bitc.fullstack503.server.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    @Override
    public UserAccount findByUserId(String userId) {
        return userMapper.findByUserId(userId);
    }
}
