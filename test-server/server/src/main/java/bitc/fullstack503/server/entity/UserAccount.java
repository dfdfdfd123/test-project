// UserAccount.java
package bitc.fullstack503.server.entity;

import lombok.Data;

@Data
public class UserAccount {
    private String userId;
    private String userPw;
    private String userRefId;
    private String userType;
}
