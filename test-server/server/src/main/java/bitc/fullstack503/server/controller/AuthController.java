package bitc.fullstack503.server.controller;

import bitc.fullstack503.server.dto.LoginRequestDto;
import bitc.fullstack503.server.dto.LoginResponseDto;
import bitc.fullstack503.server.entity.UserAccount;
import bitc.fullstack503.server.service.JwtTokenProvider;
import bitc.fullstack503.server.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto loginRequestDto) {

        // 로그 출력
        System.out.println("로그인 요청 아이디: " + loginRequestDto.getUserId());
        System.out.println("로그인 요청 비밀번호: " + loginRequestDto.getUserPw());
        System.out.println("로그인 요청 유저타입: " + loginRequestDto.getUserType());

        UserAccount user = userService.findByUserId(loginRequestDto.getUserId());

//        if (user == null || !passwordEncoder.matches(loginRequestDto.getUserPw(), user.getUserPw()) || !user.getUserType().equals(loginRequestDto.getUserType())) {
        if (user == null || !loginRequestDto.getUserPw().equals(user.getUserPw()) || !user.getUserType().equals(loginRequestDto.getUserType())) {
            System.out.println("로그인 실패: 아이디/비밀번호/유저타입 불일치");
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String token = jwtTokenProvider.createToken(user.getUserId(), user.getUserType());
        return ResponseEntity.ok(new LoginResponseDto(token, user.getUserType(), user.getUserRefId()));
    }
}
