
// UserService.java
package bitc.fullstack503.server.service;

import bitc.fullstack503.server.entity.UserAccount;

public interface UserService {
    UserAccount findByUserId(String userId);
}
